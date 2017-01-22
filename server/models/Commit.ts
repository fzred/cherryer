/**
 * 提交
 */
interface Commit {
  readonly verNumber: string, // 要同步的版本
  readonly repoName: string,  // 仓库名
  syncRepoList: Array<SyncRepo>,  // 要同步到的其他仓库
}

export default Commit
