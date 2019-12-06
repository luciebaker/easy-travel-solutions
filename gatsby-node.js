const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const {createPage} = actions

    const {data} = await graphql(`
        query {
            individualItineraries: allContentfulEtsItineraries {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    
    `)

    data.individualItineraries.edges.forEach(({node}) => {
        createPage({
            path: `itineraries/${node.slug}`,
            component: path.resolve("./src/templates/itinerary-template.js"),
            context: {
                slug: node.slug,
            }
        })
    })
}