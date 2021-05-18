export interface IGetPostService {
  execute(cid: string): Promise<string>;
}
