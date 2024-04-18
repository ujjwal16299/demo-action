import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
// import Seo from '../../components/seo'
interface BlogPostProps{
    data:any
    children:any
   // node: { name: boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.Key | null | undefined }
  }
const BlogPost:React.FC<BlogPostProps> = ({ data, children }) => {
  const image:any = getImage(data.mdx.frontmatter.hero_image)
  // console.log("img",image);
  
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage
      image={image}
      alt={data.mdx.frontmatter.hero_image_alt}
    />
      {children}
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

// export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost