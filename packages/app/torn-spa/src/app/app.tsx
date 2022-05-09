import { Button } from '@torn/atom';
import { log } from '@torn/util';

const App = () => {
  const message = 'Test';
  const test = () => {
    log(message, 'from Torn react app!!');
  };

  return (
    <div>
      <Button onClick={test}>Click me</Button>
    </div>
  );
};

export default App;
