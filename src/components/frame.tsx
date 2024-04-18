import React from 'react'
interface FrameProps{
    children: JSX.Element|JSX.Element[];
}

const Frame: React.FC<FrameProps> = ({ children }) => {
  return (
    <div>
      <h1>This is the page title</h1>
      { children }
    </div>
  )
}

export default Frame