import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { PostDTO } from "../dtos/PostDTO";
import { IGetPostsService } from "../models/IGetPostsService";

export class GetPostsService implements IGetPostsService {
  public execute(): PostDTO[] {
    const pathPosts = path.join(process.cwd(), "src", "assets", "posts");

    const files = fs.readdirSync(pathPosts).map((fileName) => {
      const slug = fileName.replace(".md", "");
      const fullPath = path.join(pathPosts, fileName);
      const fileRead = fs.readFileSync(fullPath, { encoding: "utf-8" });
      const { data } = matter(fileRead);
      return { ...data, slug } as PostDTO;
    });

    return files;
  }
}
