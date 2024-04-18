import React from "react"
import Greeting from "../components/gretting"
import Layout from "../components/layout"

interface HelloProps{
  name:string
  message:string
}
// Rendering the <Greeting> component
const SayHello: React.FC<HelloProps> = () => {
  return (
    <Layout pageTitle="Greeting">
      <div className="m-2"> 
        <Greeting name="Megan" message="Hello" />
        <Greeting name="Obinna" message="Hey" />
        <Greeting name="Generosa" message="Hii" />
      </div>
    </Layout>
  )
}

export default  SayHello