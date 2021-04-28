import React, { useState, useEffect, useContext, createContext } from 'react';

const CounterContext = createContext()

function Counter() {
  console.log('re---render')  
  return (
    <div>
    </div>
  )
}

function Example(params) {
  const [count, setCount] = useState(0);

  return (
    <div>
      you click {count} times
      <button onClick={() => setCount(count +1)}>click me</button>

      {/* 提供一个上下文， 传递一个共享值 */}
      <CounterContext.Provider value={count}>
        <Counter />
      </CounterContext.Provider>
    </div>
  )
}

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  }
//   }
//   render() { 
//     return (  );
//   }
// }
 



export default Example;