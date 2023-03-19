import Head from 'next/head'
import { Octokit } from 'octokit'

import CommitList from '@/components/CommitList'
import Header from '@/components/Header'
import { CommitInfo, ParsedCommit } from '@/utils/interfaces'
import parseData from '@/utils/parseData'

interface HomeProps {
  parsedCommits: ParsedCommit[]
}
export default function Home({ parsedCommits }: HomeProps) {
  return (
    <>
      <Head>
        <title>Git Tracker</title>
        <meta name="description" content="Track this app's commit history" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="pt-8 pl-4 sm:pl-10 pr-6 lg:pt-12 lg:pl-32 xl:pl-52">
        <CommitList commits={parsedCommits} />
      </main>
    </>
  )
}

export async function getServerSideProps() {
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
  return { props: { parsedCommits } }
}
