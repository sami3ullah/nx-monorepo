// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from '@nx-monorepo/design-system';
// TODO: not sure why I need to use `/index.js` here, NX is doing something weird
import { css } from '@nx-monorepo/design-system/css/index.js';
import { VStack, Box } from '@nx-monorepo/design-system/jsx/index.js';

export function App() {
  return (
    <VStack minH="100vh" justifyContent="center">
      <Box
        h="60px"
        w="60px"
        borderRadius="50%"
        bg="nice-yellow"
        animation="bounce 1s infinite"
        animationName="skeleton-pulse"
      ></Box>
      <Box className={css({ bg: 'red.300' })}>
        <Button>Primary</Button>
      </Box>
    </VStack>
  );
}

export default App;
