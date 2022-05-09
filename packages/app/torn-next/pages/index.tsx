import { Button } from '@torn/atom';
import { Nav } from '@torn/molecule';
import { log, topMenu } from '@torn/util';
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

      <div>
        <Nav list={topMenu} />
      </div>
    </>
  );
};

export default TornNext;
