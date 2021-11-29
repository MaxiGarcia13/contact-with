import type { NextApiRequest, NextApiResponse } from 'next';
import { env } from 'process';
import { generateSignature } from '../../../utils/signature';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { meet_id, role = 0 } = req.query;

    if (typeof meet_id !== 'string') {
      throw new Error('without_meet_id');
    }

    const signature = generateSignature(env.API_KEY_JWT ?? '', env.API_SECRET_JWT ?? '', meet_id, +role);

    res.status(200).json({ signature, meet_id, apiKey: env.API_KEY_JWT, role });
  } catch (error) {
    res.status(500).json(error);
  }
}
