import React from "react"
// import type { PageProps } from "gatsby"
interface HelloProps {
  name: string,
  message: string
}
const Greeting: React.FC<HelloProps> = (props) => {
  return (
    <><div className="flex text-xl font-medium text-blue-600"><p>{props.name}:{props.message}!</p></div></>
  )
}

export default Greeting