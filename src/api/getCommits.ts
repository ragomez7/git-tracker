import { Octokit } from 'octokit'

import { CommitInfo } from '@/utils/interfaces'
import parseData from '@/utils/parseData'

async function getCommits() {
    const octokit = new Octokit({
    auth: process.env.GITHUB_ACCESS_TOKEN,
  })
  const response = await octokit.request(
    'GET /repos/ragomez7/git-tracker/commits',
    {},
  )
  const commits = response.data.map(
    (commitInfo: CommitInfo) => commitInfo.commit,
  )
  const parsedCommits = parseData(commits)
  return parsedCommits
}

export default getCommits;