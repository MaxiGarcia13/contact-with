import { useMemo, useRef, useEffect } from 'react';
import ZoomMtgEmbedded from '@zoomus/websdk/embedded';
import { Meet } from '../../interfaces/Meet';
import { generateUuid } from '../../utils/uuid';

const View = ({ signature, apiKey, meet_id, password }: Meet) => {
  const client = useMemo(() => ZoomMtgEmbedded.createClient(), []);
  const element = useRef(null);

  useEffect(() => {
    if (element.current !== null) {
      client.init({
        debug: true,
        zoomAppRoot: element.current as HTMLLIElement,
        language: 'en-US',
        customize: {
          meetingInfo: ['topic', 'host', 'mn', 'pwd', 'telPwd', 'invite', 'participant', 'dc', 'enctype'],
          toolbar: {
            buttons: [
              {
                text: 'Custom Button',
                className: 'CustomButton',
                onClick: () => {
                  console.log('custom button');
                },
              },
            ],
          },
        },
      });

      console.log({
        apiKey: apiKey,
        signature: signature,
        meetingNumber: meet_id,
        userName: 'maxitrc813@gmail.com',
        password: password,
      });

      client.join({
        apiKey: apiKey,
        signature: signature,
        meetingNumber: meet_id,
        userName: generateUuid(),
        password: password,
      });
    }
  }, []);

  return <div ref={element}></div>;
};

export default View;
