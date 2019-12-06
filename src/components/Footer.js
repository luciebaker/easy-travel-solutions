import React from 'react'
import styles from '../css/footer.module.css'
import links from '../utilities/links'
import socialIcons from '../utilities/social-icons'
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function Footer () {

    return (
        <footer className={styles.footer}>
        <div className={styles.links}>
        {links.map((item, index) => (
          <AniLink
            fade
            key={index}
            to={item.path}
            aria-label="navigate the page"
          >
            {item.text}
          </AniLink>
        ))}
      </div>
            <div className={styles.icons}>
                {socialIcons.map((item, index) => {
                return <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" aria-label="navigate to social media" >{item.icon}</a>
                })}
            </div>
            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} Easy Travel Solutions
            </div>
        </footer>
    )
}
