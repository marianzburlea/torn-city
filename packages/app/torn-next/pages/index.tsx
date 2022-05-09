import { Button } from '@torn/atom';
import { log } from '@torn/util';
import Head from 'next/head';

const TornNext = () => {
  const message = 'Click';
  const test = () => {
    log(message, 'from Torn Next');
  };

  return (
    <>
      <Head>
        <title>Welcome to torn-next!</title>
      </Head>

      <div>
        <p>This is the content.</p>

        <div>
          <Button onClick={test}>{message}</Button>
        </div>
      </div>
    </>
  );
};

export default TornNext;
