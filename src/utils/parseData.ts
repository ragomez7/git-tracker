import { Commit } from './interfaces'
export default function parseData(commits: Commit[]) {
  const parsedCommits = []
  for (const commit of commits) {
    parsedCommits.push({ ...commit.author, message: commit.message, sha: commit.tree.sha })
  }
  return parsedCommits
}
