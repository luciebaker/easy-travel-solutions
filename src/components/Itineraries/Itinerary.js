import React from 'react'
import Image from 'gatsby-image'
import styles from '../../css/tour.module.css'
import {FaMap} from 'react-icons/fa'
import AniLink from "gatsby-plugin-transition-link/AniLink"



const Itinerary = ({itinerary}) => {
    const {name, price, country, days, slug, images} = itinerary
    let mainImage = images[0].fluid
    return (
        <article className={styles.tour}>
        <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single-itinerary"/>
        <AniLink fade className={styles.link} to={`/itineraries/${slug}`}>View Details</AniLink>
        </div>
        <div className={styles.footer}>
        <h2>{name}</h2>
        <div className={styles.info}>
        <h3 className={styles.country}>
        <FaMap className={styles.icon}/>
        {country}
        </h3>
        <div className={styles.details}>
        <h4>{days} days</h4>
        <h4>from ${price}</h4>
        </div>
        </div>
        </div>
        </article>
    )
}

export default Itinerary