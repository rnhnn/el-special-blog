import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'src/data/blog');

function getAllPostFiles(dir) {
  let files = [];

  fs.readdirSync(dir, { withFileTypes: true }).forEach((dirent) => {
    const fullPath = path.join(dir, dirent.name);

    if (dirent.isDirectory()) {
      files = files.concat(getAllPostFiles(fullPath));
    } else if (dirent.isFile() && fullPath.endsWith('.json')) {
      files.push(fullPath);
    }
  });

  return files;
}

export function getAllPosts() {
  const filePaths = getAllPostFiles(postsDirectory);

  const posts = filePaths.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const post = JSON.parse(fileContents);
    return post;
  });

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return posts;
}

export function getPostBySlug(slug) {
  const filePaths = getAllPostFiles(postsDirectory);

  const matchingFile = filePaths.find((filePath) =>
    filePath.endsWith(`${slug}.json`)
  );

  if (!matchingFile) {
    throw new Error(`Post with slug "${slug}" not found`);
  }

  const fileContents = fs.readFileSync(matchingFile, 'utf8');
  return JSON.parse(fileContents);
}