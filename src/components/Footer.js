import React from 'react'
import styles from '../css/footer.module.css'
import links from '../utilities/links'
import socialIcons from '../utilities/social-icons'
import {Link} from 'gatsby'

export default function Footer () {

    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
            {links.map((item, index) => {
                return <Link key={index} to={item.path}>
                {item.text}</Link>
            })}
            </div>
            <div className={styles.icons}>
                {socialIcons.map((item, index) => {
                return <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">{item.icon}</a>
                })}
            </div>
            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} Easy Travel Solutions
            </div>
        </footer>
    )
}
