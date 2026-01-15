import { readFile } from "fs/promises";

export async function readDataFile() {
  const data = await readFile("Data.txt", "utf-8");
  return data;
}
