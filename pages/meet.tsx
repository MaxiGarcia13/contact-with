import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { Meet } from '../interfaces/Meet';
import { useRouter } from 'next/router';

const MeetComponent = dynamic(() => import('../components/Meet'), { ssr: false });

import type { NextPage } from 'next';

const MeetPage: NextPage = () => {
  const router = useRouter();

  const meet: Meet | null = useMemo(() => {
    const { signature, apiKey, meet_id, password } = router.query;

    if (
      typeof signature === 'string' &&
      typeof apiKey === 'string' &&
      typeof meet_id === 'string' &&
      typeof password === 'string'
    ) {
      return {
        signature,
        apiKey,
        meet_id,
        password,
      };
    }

    return null;
  }, []);

  return meet !== null ? <MeetComponent {...meet} /> : <h1>Room not found</h1>;
};

export default MeetPage;
