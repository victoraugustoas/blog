import IPFS from "ipfs-core";
import { appConfig } from "../../../config/appConfig";
import { PostDTO } from "../dtos/PostDTO";
import { IGetPostsService } from "../models/IGetPostsService";

export class GetPostsService implements IGetPostsService {
  public async execute(): Promise<{ cids: PostDTO[] }> {
    const node = await IPFS.create();

    let data = "";

    const stream = node.cat(appConfig.CID_POSTS);

    for await (const chunk of stream) {
      // chunks of data are returned as a Buffer, convert it back to a string
      data += chunk.toString();
    }

    const jsonCID: { cids: PostDTO[] } = JSON.parse(data);

    await node.stop();

    return jsonCID;
  }
}
