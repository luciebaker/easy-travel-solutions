import React from 'react'
import Title from '../Title'
import styles from '../../css/contact.module.css'

const Contact = () => {
    return (
        <section className={styles.contact}>
            <Title title="contact" subtitle="us" /> 
            <div className={styles.center}>
            <form className={styles.form}>
            <div>
            <label htmlFor="name">name</label>
            <input type="text" name="name" id="name" className={styles.formControl} placeholder="Enter your Name here"/>
            </div>
            <div>
            <label htmlFor="email">email</label>
            <input type="text" name="email" id="email" className={styles.formControl} placeholder="Enter your Email here"/>
            </div>
            <div>
            <label htmlFor="message">message</label>
            <textarea name="message" id="message" rows="10" className={styles.formControl} placeholder="Enter your Message here"/>
            </div>
            <div>
            <input type="submit" value="submit your message" className={styles.submit}/>
            </div>
            </form>
            </div>
        </section>
    )
}

export default Contact