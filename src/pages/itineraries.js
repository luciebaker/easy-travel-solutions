import React, { Component } from 'react'
import Layout from "../components/layout"
import StyledHero from "../components/StyledHero"
import Itineraries from '../components/Itineraries/Itineraries'
import {graphql} from 'gatsby'
import SEO from "../components/seo"

export default class itineraries extends Component {
    render() {
        return (
            <Layout>
            <SEO title="Itineraries" />
            <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid} />
            <Itineraries/>
            </Layout>
        )
    }
}

export const query = graphql`
query {
  defaultBcg: file(relativePath: {eq: "defaultBcg.jpg"}){
    childImageSharp {
      fluid(quality:90, maxWidth: 4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`


