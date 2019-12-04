import React from "react"
// import PropTypes from "prop-types"
import "./layout.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const Layout = ({ children }) => {
  return (
    <>
    <Navbar />
    {children} 
    <Footer />
    </>
  )
} 

export default Layout
