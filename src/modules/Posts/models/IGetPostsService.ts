import { PostDTO } from "../dtos/PostDTO";

export interface IGetPostsService {
  execute(): Promise<{ cids: PostDTO[] }>;
}
