/**
 * 仓库
 */
interface Repository {
  readonly name: string,
  readonly url: string,
  diskPath: string,
}

export default Repository
