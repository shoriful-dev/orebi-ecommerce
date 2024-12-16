// import React from 'react'

const Flex = ({ children, className, ...props }) => {
  return (
    <div className={`flex ${className}`} onClick={props.onClick}>{children}</div>
  )
}
 
export default Flex
