// import React from 'react'

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-headerWidth mx-auto ${className}`}>{children}</div>
  )
}

export default Container
