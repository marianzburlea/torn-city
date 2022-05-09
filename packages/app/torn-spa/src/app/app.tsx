import { Button } from '@torn/atom';
import { Nav } from '@torn/molecule';
import { log, topMenu } from '@torn/util';

const App = () => {
  const message = 'Test';
  const test = () => {
    log(message, 'from Torn react app!!');
  };

  return (
    <div>
      <div>
        <Nav list={topMenu} />
      </div>
    </div>
  );
};

export default App;
