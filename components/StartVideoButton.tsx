import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { Meet } from '../interfaces/Meet';

const StartVideoButton = (): ReactElement => {
  const router = useRouter();

  const startVideoConference = async () => {
    const meetResponse = await fetch('/api/meet/create', {
      method: 'POST',
    });

    const { id, password } = await meetResponse.json();

    const response = await fetch(`/api/meet/${id}?role=1`);
    const data: Meet = await response.json();

    router.push(
      `/meet?meet_id=${id}&password=${password}&signature=${data.signature}&apiKey=${data.apiKey}&role=${data.role}`
    );
  };

  return (
    <>
      <h2>Start a meet</h2>
      <button onClick={startVideoConference}>Start</button>
    </>
  );
};

export default StartVideoButton;
