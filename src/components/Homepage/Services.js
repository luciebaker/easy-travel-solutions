import React from 'react'
import Title from '../Title'
import styles from '../../css/services.module.css'
import services from '../../utilities/services' 


const Services = () => {
    return (
        <section className={styles.services}> 
        <Title title="Our" subtitle="services"/>
        <div className={styles.center}>
        {services.map((item, index) => {
            return <article key={index} className={styles.service}>
            <span>{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            </article>
        })}
        </div>
        </section>
    )
}

export default Services