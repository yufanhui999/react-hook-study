import React, { useState, useMemo, useCallback } from 'react';

// this example is for understanding useMemo and useCallback
function Example(params) {
  const [target, setTarget] = useState(0);
  const [other, setOther] = useState(0);

  // two params: () => result, input
  // 函数式编程的思想，入参全在最后面。
  // useMemo缓存计算结果。它接收两个参数，第一个参数为计算过程(回调函数，必须返回一个结果)，第二个参数是依赖项(数组)，当依赖项中某一个发生变化，结果将会重新计算。
  const sum = useMemo(() => {
    let sum = 0;
    for(let i = 1; i <= target; i++) {
      sum += i
    }
    return sum
  }, [target])

  const inputChange = useCallback(
    (e) => {
      console.log(e.target.value)
    },
    [],
  )

  return (
    <div style={{ width: '200px', margin: 'auto' }}>
      <input type="text" onChange={inputChange} />
      <div style={{ width: '80px', margin: '100px auto', fontSize: '40px' }}>{target} {sum}</div>
      <button onClick={() => setTarget(target + 1)}>递增</button>
      <button onClick={() => setTarget(target - 1)}>递减</button>

      <div style={{ width: '80px', margin: '100px auto', fontSize: '20px' }}>干扰项 {other}</div>
      <button onClick={() => setOther(other + 1)}>递增</button>
      <button onClick={() => setOther(other - 1)}>递减</button>
    </div>
  )
}

export default Example