import React , {useState, useReducer} from 'react';

function Example2() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case 'add':
        return state + 1
      case 'sub': 
        return state - 1
    
      default:
        break;
    }
  }, 0)
  return (
    <div>
      you click {count} times
      <button onClick={() => dispatch('add')}>click me</button>
      <button onClick={() => dispatch('sub')}>click me</button>
    </div>
  ) 
}

export default Example2