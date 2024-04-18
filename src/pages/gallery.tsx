import React from 'react'
import Frame from '../components/frame'

interface FrameProps{
    children: JSX.Element|JSX.Element[];
}

const GalleryPage:React.FC<FrameProps> = () => {
  return (
    <Frame>
      <p>This will be passed in as children</p>
    </Frame>
  )
}

export default GalleryPage