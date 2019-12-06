import React, { Component } from 'react'
import styles from '../../css/items.module.css'
import Itinerary from './Itinerary'
import Title from '../Title'

export default class ItinerariesList extends Component {
    state={
        allitineraries: [],
        sortedItineraries: []
    }

    componentDidMount(){
        this.setState({
            allitineraries:this.props.allitineraries.edges,
            sortedItineraries:this.props.allitineraries.edges,
        })
    }
    render() {
        return (
            <section className={styles.tours}>
            <Title title="Our" subtitle="Itineraries"/>
            <div className={styles.center}>
            {
                this.state.sortedItineraries.map(({node}) => {
                    return <Itinerary key={node.contentful_id} itinerary={node}/>

                })
            }
            </div>
            </section>
        )
    }
}
