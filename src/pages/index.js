import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SimpleHero from "../components/SimpleHero"
import Banner from '../components/Banner'
import {Link} from 'gatsby'

const IndexPage = () => (
  <Layout>
    <SEO title="Easy Travel Solutions" />
    <SimpleHero>
    <Banner title="Easy Travel Solutions" info="Simply choose where you want to go and we'll take care of the rest">
    <Link to="/itneraries" className="btn-white">Explore Destinations</Link>
    </Banner>
    </SimpleHero>

  </Layout>
)

export default IndexPage
