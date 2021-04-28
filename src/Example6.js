// 自定义 hook

import React, { useState, useCallback, useEffect } from 'react';

function useWindowSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });

  const onResize = useCallback(
    () => {
      setSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      })
    },[],
  )

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    };
  }, []);

  return size
}


function Example6 () {
  const size = useWindowSize()

  return (
    <div>页面size: {size.width} x {size.height}</div>
  )
}

export default Example6