import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { AuthorDTO } from "../dtos/AuthorDTO";
import { PostDTO } from "../dtos/PostDTO";
import { PostForestryDTO } from "../dtos/PostForestryDTO";
import { IGetPostsService } from "../models/IGetPostsService";

export class GetPostsService implements IGetPostsService {
  private getAuthor(authorPath: string): AuthorDTO {
    const authorData = fs.readFileSync(authorPath, { encoding: "utf8" });
    const { data } = matter(authorData);
    return data as AuthorDTO;
  }

  public execute(): PostDTO[] {
    const pathPosts = path.join(process.cwd(), "src", "assets", "posts");

    const files = fs.readdirSync(pathPosts).map((fileName): PostDTO => {
      const slug = fileName.replace(".md", "");
      const fullPath = path.join(pathPosts, fileName);
      const fileRead = fs.readFileSync(fullPath, { encoding: "utf-8" });
      const { data } = matter(fileRead);
      const forestyParsedData = data as PostForestryDTO;
      console.log(forestyParsedData);

      const authorData = this.getAuthor(forestyParsedData.author);
      return {
        ...authorData,
        description: forestyParsedData.description,
        imagePost: forestyParsedData.imagePost,
        slug,
        title: forestyParsedData.title,
      };
    });

    return files;
  }
}
