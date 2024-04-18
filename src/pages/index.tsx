import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
// import { Link } from 'gatsby'
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'
//import NavbarComponent from "./navabar";

interface LayoutProps {
  pageTitle:string,
  children: JSX.Element|JSX.Element[];
}
const IndexPage: React.FC<LayoutProps> = () => {
  return (
    <Layout pageTitle="Landing Page" >
      <p className="mt-2">I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/icon.png"
      />
    </Layout>
      )
    }
    // <main>
    //   <h1>Welcome to my Gatsby site!</h1>
    //   <Link to="/about">About</Link>
    //   <p>I'm making this by following the Gatsby Tutorial.</p>
    // </main>
//   )
// }

export default IndexPage

export const Head: HeadFC = () => (
    <>
      <title>About Me</title>
      <meta name="description" content="Your description" />
    </>
)
