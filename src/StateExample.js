import React, { useState } from 'react';

const useCount = (initialState) => {
  const [count, setCount] = useState(initialState)
  return [
    count,
    () => {
      setCount(count + 1)
    }
  ]
}

// useCount 被称为行为。
// state hook 状态行为。
// effect hook ,副作用行为，
// context hook 上下文行为.
// 使用state 的时候，尽量使用这种。
// state => new state



function StateExample() {
  const [count, setCount] = useCount(0);

  return (
    <div>
      your click {count}
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  )
}

export default StateExample