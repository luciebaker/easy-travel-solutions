import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

const getAbout = graphql`
query aboutImage{
  aboutImage: file(relativePath: {eq: "aboutBcg.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

const About = () => {
  const {aboutImage} = useStaticQuery(getAbout)
    return (
        <section className={styles.about}>
          <Title title="about" subtitle="us"/>  
          <div className={styles.aboutCenter}>
          <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
          <Img fluid={aboutImage.childImageSharp.fluid} alt="French Polynesia"/>
          </div>
          </article>
          <article className={styles.aboutInfo}>
          <h2>Not sure where to go? Let us guide you</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          <button type="button" className="btn-primary">Read More</button>
          </article>
          </div>
        </section>
    )
}
export default About