import { Button } from '@torn/atom';
import { log } from '@torn/util';
import Head from 'next/head';

const TornNextGym = () => {
  const message = 'Click';

  const test = () => {
    log(message, 'Torn Next Gym');
  };

  return (
    <>
      <Head>
        <title>Welcome to torn-next Gym!</title>
      </Head>

      <div>
        <p>This is the content of Torn Next Gym.</p>

        <div>
          <Button onClick={test}>{message}</Button>
        </div>
      </div>
    </>
  );
};

export default TornNextGym;
