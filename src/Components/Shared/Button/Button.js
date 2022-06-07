import React from 'react'
import './Button.css'
function Button({children}) {
  return (
    <button className='customBtn btn'>
 {children}

</button>

  )
}

export default Button