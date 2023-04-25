import fs from "fs";
import path from "path";

export function mkdir(path: string): void {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
}

export function ls(path: string): string[] {
  return fs
    .readdirSync(path, { withFileTypes: true })
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name);
}

export function read(path: string): string {
  return fs.readFileSync(path, "utf8");
}

export function write(path: string, data: string): void {
  fs.writeFileSync(path, data, { flag: "w" });
}

export function fullPath(basePath: string, files: string[]): string[] {
  return files.map((file) => path.resolve(basePath, file));
}
