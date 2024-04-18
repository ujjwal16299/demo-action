import { HeadFC, graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Card from './card';

interface configsProps {
  title: string,
  description: string,
  imageUrl: string,
  buttonText: string
}

const IndexPage: React.FC<configsProps> = () => {

  // using static
  // const configs= {
  //   title : "Card Components",
  //   description: "This is a card component",
  //   imageUrl:"http://www.shadowsphotography.co/wp-content/uploads/2017/12/photography-01-800x400.jpg",
  //   buttonText: "View"
  
  // }

  // mdx import with gql 


// const data = useStaticQuery(graphql`
// query {
//   allMdx {
//     nodes {
//       frontmatter {
//         buttonText
//         description
//         imageUrl
//         title
//       }
//     }
//   }
// }
// `);

// const configs = data?.allMdx?.nodes?.[0]?.frontmatter;

  // using gql json
  const data = useStaticQuery(graphql`
  query {
    allCardJson{
      nodes {
      title
      description
      imageUrl
      buttonText
      }
    }
  }
`);

const configs = data?.allCardJson?.nodes?.[0]


  return (
    <div>
      <Card configs={configs} />
    </div>
  );
};

export default IndexPage;


export const Head: HeadFC = () => <title>Home Page</title>

