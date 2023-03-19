import React from 'react'

import { ParsedCommit } from '@/utils/interfaces'

interface CommitProps {
  commit: ParsedCommit
}
export default function Commit({ commit }: CommitProps) {
  const parsedDate = new Date(commit.date).toString()
  return (
    <article className="mt-4 sm:mt-8">
      <p className="text-xs sm:text-sm text-green-400">Commit Date: {parsedDate}</p>
      <article className="pl-1 text-sm sm:text-base">
        <p>{commit.name}</p>
        <p>{commit.email}</p>
        <p>{commit.message}</p>
      </article>
    </article>
  )
}
