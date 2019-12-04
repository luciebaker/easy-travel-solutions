import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledHero from "../components/StyledHero"
import Banner from '../components/Banner'
import About from '../components/Homepage/About'
import Services from '../components/Homepage/Services'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {graphql} from 'gatsby'

export default ({data}) => (
  <Layout>
    <SEO title="Easy Travel Solutions" />
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
    <Banner title="Easy Travel Solutions" info="Simply choose where you want to go and we'll take care of the rest">
    <AniLink fade to="/itineraries" className="btn-white">Explore Destinations</AniLink>
    </Banner>
    </StyledHero>
    <About />
    <Services/>

  </Layout>
)

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



