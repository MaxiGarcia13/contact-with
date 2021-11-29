import type { NextApiRequest, NextApiResponse } from 'next';
import { env } from 'process';
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const payload = {
      iss: env.API_KEY_JWT,
      exp: new Date().getTime() + 5000,
    };

    const token = jwt.sign(payload, env.API_SECRET_JWT ?? '');

    const meetResponse = await fetch('https://api.zoom.us/v2/users/me/meetings', {
      method: 'POST',
      headers: {
        'User-Agent': 'contact-me',
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({}),
    });

    const meetData = await meetResponse.json();

    res.status(200).json({ ...meetData });
  } catch (error) {
    console.log(error);

    res.status(500).json(error);
  }
}
