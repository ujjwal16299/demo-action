import * as React from 'react'
import type { PageProps } from "gatsby"
// import {Link} from "gatsby"
import Layout from '../components/layout'

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="About Me">
    <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
  </Layout>
  )
}

// export const Head: HeadFC = () => (
//   <>
//     <title>About Me</title>
//     <meta name="description" content="Your description" />
//   </>
// )
export default AboutPage