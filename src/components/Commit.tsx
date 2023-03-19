import React from 'react'

import useTypingEffect from '@/hooks/useTypingEffect'
import { ParsedCommit } from '@/utils/interfaces'

interface CommitProps {
  commit: ParsedCommit
}
export default function Commit({ commit }: CommitProps) {
  const parsedDate = `Commit Date: ${new Date(commit.date).toString()}`
  const renderedCommitDate = useTypingEffect(parsedDate)
  const renderedName = useTypingEffect(commit.name)
  const renderedEmail = useTypingEffect(commit.email)
  const renderedMessage = useTypingEffect(commit.message)
  return (
    <article className="mt-4 sm:mt-8">
      <p className="text-xs sm:text-sm text-green-400">{renderedCommitDate}</p>
      <article className="pl-1 text-sm sm:text-base">
        <p>{renderedName}</p>
        <p>{renderedEmail}</p>
        <p>{renderedMessage}</p>
      </article>
    </article>
  )
}
