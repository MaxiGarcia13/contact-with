import { ChangeEvent, ReactElement, useState } from 'react';
import { useRouter } from 'next/router';
import { Meet } from '../interfaces/Meet';

const JoinMeet = (): ReactElement => {
  const router = useRouter();
  const [meetNumber, setMeetNumber] = useState('');
  const [password, setPassword] = useState('');

  const startVideoConference = async () => {
    const response = await fetch(`/api/meet/${meetNumber}?role=0`);
    const data: Meet = await response.json();

    router.push(
      `/meet?meet_id=${meetNumber}&password=${password}&signature=${data.signature}&apiKey=${data.apiKey}&role=${data.role}`
    );
  };

  const handleSetMeetNumber = (ev: ChangeEvent<HTMLInputElement>) => setMeetNumber(ev.target.value);
  const handleSetPassword = (ev: ChangeEvent<HTMLInputElement>) => setPassword(ev.target.value);

  return (
    <>
      <h2>Join a meet</h2>
      <input type='text' placeholder='Meet number' value={meetNumber} onChange={handleSetMeetNumber} />
      <input type='text' placeholder='Meet Password' value={password} onChange={handleSetPassword} />
      <button onClick={startVideoConference}>Join</button>
    </>
  );
};

export default JoinMeet;
