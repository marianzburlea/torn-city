import { Button } from '@torn/atom';
import { log } from '@torn/util';
import Head from 'next/head';

const TornNextJob = () => {
  const message = 'Click';

  const test = () => {
    log(message, 'Torn Next Job');
  };

  return (
    <>
      <Head>
        <title>Welcome to torn-next Job!</title>
      </Head>

      <div>
        <p>This is the content of Torn Next Job.</p>

        <div>
          <Button onClick={test}>{message}</Button>
        </div>
      </div>
    </>
  );
};

export default TornNextJob;
