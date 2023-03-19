import { Commit, ParsedCommit } from './interfaces'
export default function parseData(commits: Commit[]): ParsedCommit[] {
  const parsedCommits = []
  for (const commit of commits) {
    parsedCommits.push({
      ...commit.author,
      message: commit.message,
      sha: commit.tree.sha,
    })
  }
  return parsedCommits
}
