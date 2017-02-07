/**
 * 仓库
 */
interface Repository {
  readonly name: string,
  readonly url: string,
  diskPath: string,
  groupId: string,
}

export default Repository
