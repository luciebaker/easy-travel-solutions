import React from 'react'
import styled from "styled-components"

const Title = ({title, subtitle}) => {
    return (
        <TitleWrapper>
            <h2>
            <span className="title">{title}</span>
            <span>{subtitle}</span>
            </h2>
        </TitleWrapper>
    )
}

const TitleWrapper = styled.div`
font-size: 2.1rem;
margin-bottom: 2rem;
h2 {
    text-align: center;
    color: var(--primaryColor);
    letter-spacing: .15rem;
}
.title {
    color: var(--mainBlack);
    padding-right: .8rem;
}
`
export default Title