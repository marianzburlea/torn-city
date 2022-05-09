import { Nav } from '@torn/molecule';
import { themeTornSPA } from '@torn/theme';
import { log, topMenu } from '@torn/util';
import { ThemeProvider } from 'styled-components';

const App = () => {
  return (
    <div>
      <h1>Welcome to Torn from JavaScript and React</h1>
      <ThemeProvider theme={themeTornSPA}>
        <Nav list={topMenu} />
      </ThemeProvider>
    </div>
  );
};

export default App;
