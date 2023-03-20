import React from 'react'

import { ParsedCommit } from '@/utils/interfaces'

import Commit from './Commit'

interface CommitListProps {
  commits: ParsedCommit[]
}
export default function CommitList({ commits }: CommitListProps) {
  return (
    <section>
      {commits.map((commit) => (
        <Commit key={commit.sha} commit={commit} />
      ))}
    </section>
  )
}
