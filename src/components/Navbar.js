import React, {useState} from 'react'
import styles from "../css/navbar.module.css"
import {FaAlignRight} from "react-icons/fa"
import links from "../utilities/links"
import socialIcons from "../utilities/social-icons"
import logo from "../images/ETS-Logo.svg"
import {Link} from 'gatsby'




const Navbar = () => {
    const [isOpen, setNav] = useState(false)
    const toggleNav = () => {
        setNav(isOpen => !isOpen)
    }
    return (
        <nav className={styles.navbar}>
        <div className={styles.navCenter}>
        <div className={styles.navHeader}>
        <img className={styles.navLogo} src={logo} alt="Easy Travel Solutions Logo" />
        <button type="button" className={styles.logoBtn} onClick={toggleNav}>
        <FaAlignRight className={styles.logoIcon}/>
        </button>
        </div>
        <ul className={isOpen?`${styles.navLinks} ${styles.showNav}` : `${styles.navLinks}`}>
        {links.map((item, index) => {
            return(<li key={index}> <Link to={item.path}> {item.text} </Link> </li>)
        })}
        </ul>

        <div className={styles.navSocialLinks}>
        {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="navigate to social media"
            >
              {item.icon}
            </a>
          )
        })}
      </div>
        </div>
        </nav>
    )
}

export default Navbar 
