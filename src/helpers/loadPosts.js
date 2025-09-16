import fs from 'fs'; // Import file system module to read directories and files
import path from 'path'; // Import path module to handle file paths

// Define the directory where all blog JSON files are stored
const postsDirectory = path.join(process.cwd(), 'src/data/blog');

// Recursively get all JSON file paths in a directory and its subdirectories
function getAllPostFiles(dir) {
  let files = []; // Initialize an array to store file paths

  // Read the directory contents, getting Dirent objects for each entry
  fs.readdirSync(dir, { withFileTypes: true }).forEach((dirent) => {
    const fullPath = path.join(dir, dirent.name); // Build full path for each entry

    if (dirent.isDirectory()) {
      // If the entry is a directory, recursively get all JSON files inside it
      files = files.concat(getAllPostFiles(fullPath));
    } else if (dirent.isFile() && fullPath.endsWith('.json')) {
      // If the entry is a file and ends with '.json', add its path to the list
      files.push(fullPath);
    }
  });

  return files; // Return the complete list of JSON file paths
}

// Get all posts by reading and parsing every JSON file
export function getAllPosts() {
  const filePaths = getAllPostFiles(postsDirectory); // Get all JSON file paths

  const posts = filePaths.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, 'utf8'); // Read file contents as text
    try {
      return JSON.parse(fileContents); // Parse the JSON text into a JavaScript object
    } catch (err) {
      // If parsing fails, log the file path and throw the error
      console.error(`Failed to parse JSON in file: ${filePath}`);
      throw err;
    }
  });

  // Sort posts by date in descending order (newest first)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return posts; // Return the sorted array of post objects
}

// Get a single post by its internal "slug" property
export function getPostBySlug(slug) {
  const filePaths = getAllPostFiles(postsDirectory); // Get all JSON file paths

  for (const filePath of filePaths) {
    const fileContents = fs.readFileSync(filePath, 'utf8'); // Read file contents
    const post = JSON.parse(fileContents); // Parse JSON into an object

    if (post.slug === slug) {
      // If the post's internal slug matches the requested slug, return it
      return post;
    }
  }

  // If no matching post was found, throw an error
  throw new Error(`Post with slug "${slug}" not found`);
}