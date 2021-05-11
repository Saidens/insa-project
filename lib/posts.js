import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // Hämta filnamn i mappen "posts"
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Ta bort ".md" från filen för att hitta id(filnamn)
    const id = fileName.replace(/\.md$/, "");

    // Läs markdownfilen som en string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Använd gray-matter till att  parsa metadatan från markdown.
    const matterResult = matter(fileContents);

    // Kombinera id med datan från filen. 
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sortera posts baserat på datum. 
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returnerar en array som ser ut såhär:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
  
    // Använd gray-matter till att  parsa metadatan från markdown
    const matterResult = matter(fileContents)
  
    // Använd remark till att convertera markdown till en HTML Sträng
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()
  
    // Kombinera id med contentHTML och resterande data från filen. 
    return {
      id,
      contentHtml,
      ...matterResult.data
    }
}
