import { useState } from 'react'
import './App.css'
import { Stack,Button } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Stack direction="horizontal" gap={2}>
    <Button as="a" variant="primary">
      Button as link
    </Button>
    <Button as="a" variant="success">
      Button as link
    </Button>
  </Stack>
  )
}

export default App
