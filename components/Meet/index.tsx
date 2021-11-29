import { useEffect, useState } from 'react';
import View from './View';
import { Meet } from '../../interfaces/Meet';

const MeetComponent = ({ signature, apiKey, meet_id, password }: Meet) => {
  const [mounted, setMounted] = useState<Boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? <View signature={signature} apiKey={apiKey} meet_id={meet_id} password={password} /> : null;
};

export default MeetComponent;
