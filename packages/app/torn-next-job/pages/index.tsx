import { Button } from '@torn/atom';
import { Nav } from '@torn/molecule';
import { log, topMenu } from '@torn/util';
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

      <div>
        <Nav list={topMenu} />
      </div>
    </>
  );
};

export default TornNextJob;
