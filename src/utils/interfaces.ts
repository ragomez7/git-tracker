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
  sha: string
  author: Author
  committer: Author
  message: string
  tree: Tree
}

export interface CommitInfo {
  commit: Commit
}

export interface ParsedCommit extends Author {
  sha: string
  message: string
}
