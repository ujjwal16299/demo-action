import React from "react";
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {

    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
    `)
    return (
        <> <h1 className='text-blue-500'>{data.site.siteMetadata.title}</h1></>
    )
}

export default Header;