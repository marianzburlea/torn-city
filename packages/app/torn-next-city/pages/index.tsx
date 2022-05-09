import { Button } from '@torn/atom';
import { log } from '@torn/util';
import Head from 'next/head';

const TornNextCity = () => {
  const message = 'Click';

  const test = () => {
    log(message, 'Torn Next City');
  };

  return (
    <>
      <Head>
        <title>Welcome to torn-next City!</title>
      </Head>

      <div>
        <p>This is the content of Torn Next City.</p>

        <div>
          <Button onClick={test}>{message}</Button>
        </div>
      </div>
    </>
  );
};

export default TornNextCity;
