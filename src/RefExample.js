import React, { Component, createRef, useRef, useState } from 'react';

function FocusInput() {
  // const inputElement = createRef();
  // createRef 每次渲染都会返回一个新的引用，而 useRef 每次都会返回相同的引用。

  const [renderIndex, setRenderIndex] = useState(1);
  const refFromUseRef = useRef()
  const refFromCreateRef = createRef()

  if(!refFromUseRef.current) {
    refFromUseRef.current = renderIndex
  }

  if(!refFromCreateRef.current) {
    refFromCreateRef.current = renderIndex
  }

  const inputElement = useRef()
  return (
    <div>
      <p>current render index {renderIndex}</p>
      <p>
        refFromCreateRef: {refFromCreateRef.current}
      </p>
      <p>
        refFromUseRef: {refFromUseRef.current}
      </p>
      <input ref={inputElement} />
      <button
        onClick={() => setRenderIndex(prev => prev + 1)}
      >focus input</button>
    </div>
  )
}

export default FocusInput