import { Button } from '@torn/atom';
import { log } from '@torn/util';
import Head from 'next/head';

const TornNextHome = () => {
  const message = 'Click';

  const test = () => {
    log(message, 'Torn Next Home');
  };

  return (
    <>
      <Head>
        <title>Welcome to torn-next Home!</title>
      </Head>

      <div>
        <p>This is the content of Torn Next home.</p>

        <div>
          <Button onClick={test}>{message}</Button>
        </div>
      </div>
    </>
  );
};

export default TornNextHome;
