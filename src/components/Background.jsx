import React from 'react'

const Background = () => {
  return (
    <div className="w-screen h-screen xl:h-100%  bg-black absolute -z-20">
      <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-b from-black to-red-500 opacity-40">
      </div>
    </div>
  )
}

export default Background