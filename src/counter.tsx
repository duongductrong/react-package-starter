import { useState } from "react"

export interface ExampleProps {}

const Example = (props: ExampleProps) => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase +</button>
    </div>
  )
}

export default Example
