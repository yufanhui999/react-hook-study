import React, { Component, createRef, useRef, useState } from 'react';

function FocusInput() {
  // const inputElement = createRef();
  // createRef 每次渲染都会返回一个新的引用，而 useRef 每次都会返回相同的引用。

  const inputElement = useRef()
  const [count, setCount] = useState(0)

  function handleAlertClick() {
    setTimeout(() => {
      alert('you click ' + count)
    }, 1000);
  }

  return (
    <div>
      you click {count} times
      {/* <input ref={inputElement} /> */}
      <button
        onClick={() => setCount(count + 1)}
      >focus input</button>
      <button
        onClick={handleAlertClick}
      >
        show alert
      </button>
    </div>
  )
}

export default FocusInput