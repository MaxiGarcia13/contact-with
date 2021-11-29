import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import JoinMeet from '../components/JoinMeet';
import styles from '../styles/Home.module.css';

const StartVideoButton = dynamic(() => import('../components/StartVideoButton'));

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <StartVideoButton />
      <JoinMeet />
    </div>
  );
};

export default Home;
