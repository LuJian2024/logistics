import { readFile } from "fs/promises";
import path from "path";

export async function getMessages({ locale }: { locale: string }) {
  try {
    const filePath = path.resolve("./src/messages", `${locale}.json`);
    const fileContents = await readFile(filePath, "utf-8");
    return JSON.parse(fileContents);
  } catch {
    return null;
  }
}
