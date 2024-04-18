interface GatsbyActions {
  createTypes: (typeDefs: string) => void
}

interface DefaultProps {
  actions: GatsbyActions
}


const createSchemaCustomization = ({ actions }: DefaultProps) => {
  const { createTypes } = actions

  const typeDefs = `
    type CardJson implements Node {
      title: String!
      description: String!
      buttonText: String!
      imageUrl: String
    }
  `

  createTypes(typeDefs)
  // console.log("type",createTypes(typeDefs));
  
}

export default createSchemaCustomization;

