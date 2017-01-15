
interface AyncRepo {
  synced: boolean, // 是否已同步
  readonly repoName: string,  // 同步的仓库名
  syncTime?: Date,  // 同步时间
}
