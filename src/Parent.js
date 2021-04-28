import React, { useContext } from 'react';

function Parent() {
  console.log('re-render')
  return (
    <div>
      
    </div>
  )
}

export default React.memo(Parent)