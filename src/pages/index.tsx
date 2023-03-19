import Head from 'next/head'

import getCommits from '@/api/getCommits'
import CommitList from '@/components/CommitList'
import Header from '@/components/Header'
import { ParsedCommit } from '@/utils/interfaces'

interface HomeProps {
  parsedCommits: ParsedCommit[]
}

export async function getServerSideProps() {
  const parsedCommits = getCommits();
  return { props: { parsedCommits } }
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


