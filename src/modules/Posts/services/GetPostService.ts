import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { IGetPostService } from "../models/IGetPostService";

export class GetPostService implements IGetPostService {
  public execute(slug: string): string {
    const pathPosts = path.join(process.cwd(), "src", "assets", "posts");

    const fileName = fs
      .readdirSync(pathPosts)
      .find((fileName) => fileName.includes(slug));
    const fileData = fs.readFileSync(path.join(pathPosts, fileName), "utf8");
    const { content } = matter(fileData);
    return content;
  }
}
