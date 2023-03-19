import type { NextApiRequest, NextApiResponse } from 'next'

import getCommits from '@/api/getCommits'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const commitHistory = await getCommits()
    res.status(200).send(commitHistory)
  } catch (err) {
    res.status(400).send(err)
  }
}
