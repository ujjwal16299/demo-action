import React from "react"
import Layout from "../../components/layout"
import { Link, PageProps, graphql } from "gatsby"


interface BlogProps{
  data:any
 // node: { name: boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.Key | null | undefined }
}
const Blog: React.FC<BlogProps> = ({data}) => {
    console.log("data",data);
    
  return (
    <Layout pageTitle="Blog">
          <div className="m-2">
              {
                  data.allMdx.nodes.map((node: { id: React.Key | null | undefined; excerpt:any; frontmatter: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; date: any; slug:string} }) => (
                      <article key={node.id}>
                          <h2 className="text-xl text-blue-600">
                              <Link to={`/blog/${node.frontmatter.slug}`}>
                                  {node.frontmatter.title}
                              </Link>
                          </h2>
                          <p className="font-semibold">Posted: {node.frontmatter.date}</p>
                          <p>{node.excerpt}</p>
                      </article>
                  ))
              }
          </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export default  Blog;