import { useState } from 'react'
import "@radix-ui/themes/styles.css";
import { Button, Flex, Heading, Text, Theme } from '@radix-ui/themes';


export default function App() {
  const [count, setCount] = useState(0)

  return (
    <Theme>
      <Heading>Vite + React</Heading>
      <Flex direction='column' maxWidth='fit-content'>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Text>
          Edit <code>src/App.tsx</code> and save to test HMR
        </Text>
      </Flex>
      <Text>
        Click on the Vite and React logos to learn more
      </Text>
    </Theme>
  )
}
