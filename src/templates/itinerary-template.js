import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import StyledHero from '../components/StyledHero'
import styles from '../css/template.module.css'
import Img from 'gatsby-image'
import {FaMoneyBillWave, FaMap} from 'react-icons/fa'
import Day from '../components/SingleItinerary/Day'
import AniLink from 'gatsby-plugin-transition-link/AniLink'


const Template = ({data}) => {

    const {name, price, country, days, date, description:{description}, images, journey} = data.contentfulEtsItineraries
    const [mainImage,...otherImages] = images

    return <Layout>
    <StyledHero img={mainImage.fluid}/>
    <section className={styles.template}>
    <div className={styles.center}>
    <div className={styles.images}>
    {otherImages.map((item, index) => {
        return <Img key={index} fluid={item.fluid} alt="itinerary photos" className={styles.image}/>
    })}
    </div>
    <h2>{name}</h2>
    <div className={styles.info}>
    <p> <FaMoneyBillWave className={styles.icon}/> Starting from ${price}</p>
    <p> <FaMap className={styles.icon}/>{country}</p>
    </div>
    <h4>Starts: {date}</h4>
    <h4>Duration: {days} days</h4>
    <p className={styles.desc}>{description}</p>
    <h2>Daily Schedule</h2>
    <div className={styles.journey}>
    {journey.map((item, index) => {
        return <Day key={index} day={item.day} info={item.info}/>
    })}
    </div>
    <AniLink fade to="/itineraries" className="btn-primary">Back to Itineraries</AniLink>
    </div>
    
    </section>
    </Layout>
}

export const query = graphql`
query ($slug: String!) {
    contentfulEtsItineraries(slug: {eq: $slug}) {
        name
        price
        country
        days
        date(formatString: "MMMM Do, YYYY")
        description {
            description
        }
        journey {
            day
            info
        }
        images {
            fluid {
            ...GatsbyContentfulFluid_tracedSVG
        }
    }
}
}

`

export default Template