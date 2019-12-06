import React from 'react'
import Itinerary from '../Itineraries/Itinerary'
import {useStaticQuery, graphQL} from 'gatsby'
import Title from '../Title'
import styles from '../../css/items.module.css'
import Anilink from 'gatsby-plugin-transition-link/Anilink'

const getFeaturedItineraries = graphql `
{
featureditineraries: allContentfulEtsItineraries(filter: {featured: {eq:true}}) {
    edges {
    node {
        name
        price
        slug
        country
        contentful_id
        days
        images {
        fluid {
            ...GatsbyContentfulFluid_tracedSVG
        }
        }
    }
    }
}
}
`

const FeaturedItineraries = () => {
    const response = useStaticQuery(getFeaturedItineraries)
    const itineraries = response.featureditineraries.edges
    

    return (
        <section className={styles.tours}>
        <Title title="Featured" subtitle="Itineraries"/>
        <div className={styles.center}>
        {itineraries.map(({node}) => {
            return <Itinerary key={node.contentful_id} itinerary={node}/>

        })}
        </div>
        <Anilink fade to="/itineraries" className="btn-primary">See all itineraries</Anilink>
        </section>
    )
}

export default FeaturedItineraries