import { Button } from '@torn/atom';
import { Nav } from '@torn/molecule';
import { log, topMenu } from '@torn/util';
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

      <div>
        <Nav list={topMenu} />
      </div>
    </>
  );
};

export default TornNextCity;
