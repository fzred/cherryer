/**
 * 提交
 */
interface Commit {
  readonly verNumber: string, // 要同步的版本
  readonly repoName: string,  // 仓库名
  syncRepoList: Array<ayncRepo>,  // 要同步到的其他仓库
}

interface ayncRepo {
  synced: boolean, // 是否已同步
  readonly repoName: string,  // 同步的仓库名
  syncTime?: Date,  // 同步时间
}

export default Commit
