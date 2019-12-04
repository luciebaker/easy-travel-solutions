import React from 'react'
import Layout from "../components/layout"
import StyledHero from "../components/StyledHero"
import {graphql} from 'gatsby'
import SEO from "../components/seo"


export default function blog({data}) {
    return (
        <Layout>
        <SEO title="Blog" />
        <StyledHero img={data.blogBcg.childImageSharp.fluid} />

        </Layout>
    )
}

export const query = graphql`
query {
  blogBcg: file(relativePath: {eq: "blogBcg.jpg"}){
    childImageSharp {
      fluid(quality:90, maxWidth: 4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`