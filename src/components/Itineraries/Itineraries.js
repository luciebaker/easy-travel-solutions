import React from 'react'
import ItinerariesList from './ItinerariesList'
import {useStaticQuery, graphql} from 'gatsby'

const getAllItineraries = graphql `
query {
    allitineraries: allContentfulEtsItineraries {
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

const Itineraries = () => {
    const {allitineraries} = useStaticQuery(getAllItineraries)
    return (
            <ItinerariesList allitineraries={allitineraries} />
    
    )
}

export default Itineraries