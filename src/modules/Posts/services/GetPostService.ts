import IPFS from "ipfs-core";
import { IGetPostService } from "../models/IGetPostService";

export class GetPostService implements IGetPostService {
  public async execute(cid: string): Promise<string> {
    const node = await IPFS.create();

    let data = "";

    const stream = node.cat(cid);

    for await (const chunk of stream) {
      // chunks of data are returned as a Buffer, convert it back to a string
      data += chunk.toString();
    }

    await node.stop();

    return data;
  }
}
