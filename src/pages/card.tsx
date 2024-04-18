import { HeadFC, graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import {Card} from "@gokul-zversal/gatsby-card-component-package"
import Layout from '../components/layout'
import "@gokul-zversal/gatsby-card-component-package/build/main.css"
// import Card from '../../plugins/gatsby-source-card/src/pages/card';

interface configsProps {
    title: string,
    description: string,
    imageUrl: string,
    buttonText: string
  }
const CardComponent: React.FC<configsProps> = () => {



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
  console.log("configs",configs);
  

  // const configs= {
  //   title : "Card Components",
  //   description: "This is a card component",
  //   imageUrl:"http://www.shadowsphotography.co/wp-content/uploads/2017/12/photography-01-800x400.jpg",
  //   buttonText: "View More"
  
  // }

  return (
    <Layout pageTitle="Card">
    <div className="flex justify-center items-center h-screen">
      <Card configs={configs} />
    </div>
    </Layout>
  );
};

export default CardComponent;

export const Head: HeadFC = () => <title>Home Page</title>;
