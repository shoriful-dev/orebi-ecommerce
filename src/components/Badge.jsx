import React from 'react'

function Badge({className,text}) {
  return (
    <div className={`bg-black text-white font-bold text-sm w-[87px] py-[10px] text-center ${className}`}>{text}</div>
  )
}

export default Badge
