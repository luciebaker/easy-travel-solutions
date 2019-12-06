import React from 'react'
import Itinerary from '../Itineraries/Itinerary'
import {useStaticQuery, graphql} from 'gatsby'
import Title from '../Title'
import styles from '../../css/items.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
            ...GatsbyContentfulFluid
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
        <AniLink fade to="/itineraries" className="btn-primary">See all itineraries</AniLink>
        </section>
    )
}

export default FeaturedItineraries