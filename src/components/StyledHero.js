import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'


const StyledHero = ({img, className, children, home}) => {
    return (
        <BackgroundImage className={className} fluid={img} home={home}>
            {children}
        </BackgroundImage>
    )
}

export default styled(StyledHero)`
    min-height: ${props => {
    return props.home ? "calc(100vh - 62px)" : "65vh"
    }};
background-position: center;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
`