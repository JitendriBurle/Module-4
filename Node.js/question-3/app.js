import os from "os";
import { writeFile, readFile, appendFile, unlink } from "fs/promises";

try {
  console.log("Free Memory:", os.freemem());
  console.log("Total CPU Cores:", os.cpus().length);
} catch (err) {
  console.error(err.message);
}

async function run() {
  try {
    await writeFile("data.txt", "Hello World\n");
    await writeFile("Readme.md", "## This is first line in Readme\n");

    const content = await readFile("data.txt", "utf-8");
    console.log(content);

    await appendFile("data.txt", "This is second line\n");
    await unlink("Readme.md");
  } catch (err) {
    console.error(err.message);
  }
}

run();
