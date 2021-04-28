import React, { useReducer, createContext, memo } from 'react';
// import Parent from './Parent'

const CountContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1
    case 'SUB': 
      return state - 1
    default:
      return state
  }
}

const Parent = memo(() => {
  console.log('re-render')
  return (
    <div></div>
  )
})

function Example() {
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div>
      <h2>
        {count}
        <button onClick={() => dispatch({type: 'ADD'})}>++++</button>
        <button onClick={() => dispatch({type: 'SUB'})}>-----</button>
        <CountContext.Provider value={count}>
          <Parent />
        </CountContext.Provider>
      </h2>
    </div>
  )
}

export default Example

