export interface Author {
  name: string
  email: string
  date: string
}

export interface Tree {
  sha: string
  url: string
}
export interface Commit {
  author: Author
  committer: Author
  message: string
  tree: Tree
}

export interface CommitInfo {
  commit: Commit
}
