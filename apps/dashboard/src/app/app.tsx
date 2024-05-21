// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from '@nx-monorepo/design-system';
import { css } from '../styled-system/css';

export function App() {
  return (
    <div className={css({ bg: 'red.200' })}>
      <Button variant="outline">Primary</Button>
    </div>
  );
}

export default App;
