import { AuthorDTO } from "./AuthorDTO";

export interface PostDTO extends AuthorDTO {
  title: string;
  imagePost: string;
  slug: string;
  description: string;
}
