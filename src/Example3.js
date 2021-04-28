import React, { createContext, useState, useContext} from "react"

// 创建一个context,所有的子组件都可以获取到这个 context
const CountContext = createContext('light');

// Context的作用就是对它所包含的组件树提供全局共享数据的一种技术。

//count变量允许跨层级实现传递和使用了（也就是实现了上下文），当父组件的count变量发生变化时，子组件也会发生变化。
function Index() {
  const count = useContext(CountContext)
  return <h2>{count}</h2>
}

function Example3(props) {
  const [count, setCount] = useState(0)

  return (
    <div>
      you clicked {count} times
      <button onClick={() => setCount(count + 1)}>
        click me 
      </button>

      <CountContext.Provider value={count} >
        <Index></Index>
      </CountContext.Provider>

    </div>
  )
}

export default Example3