import IPFS from "ipfs-core";
import { appConfig } from "../../../config/appConfig";
import { PostDTO } from "../dtos/PostDTO";
import { IGetPostsService } from "../models/IGetPostsService";

export class GetPostsService implements IGetPostsService {
  public async execute(): Promise<PostDTO[]> {
    const node = await IPFS.create();

    let data = "";
    const posts: PostDTO[] = [];

    for await (const dirObj of node.ls(appConfig.CID_POSTS)) {
      for await (const file of node.ls(dirObj.path)) {
        if (file.name === "index.json") {
          const idx = posts.findIndex((post) => post.slug === dirObj.name);

          const stream = node.cat(file.cid);
          for await (const chunk of stream) {
            data += chunk.toString();
          }

          const jsonCID: PostDTO = JSON.parse(data);
          if (idx > -1) {
            posts[idx] = { ...jsonCID, cid: posts[idx].cid };
          } else {
            posts.push(jsonCID);
          }

          data = "";
        }
        if (file.name === "index.md") {
          const idx = posts.findIndex((post) => post.slug === dirObj.name);
          if (idx > -1) {
            // @ts-ignore
            posts[idx] = { ...posts[idx], cid: file.cid.toString() };
          } else {
            posts.push({
              cid: file.cid.toString(),
              slug: dirObj.name,
              name: "",
              description: "",
              photo: "",
            });
          }
        }
      }
    }

    await node.stop();

    return posts;
  }
}
