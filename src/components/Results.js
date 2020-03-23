import React from 'react'
import styled from '@emotion/styled';

const Message = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;

`;

const QouteResult = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26c6DA;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;

`;
const QouteText = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;


const Results = ({quote}) => {
    return (
        (quote === 0)
        ? <Message>Select make, year and plan</Message> 
        : 
        <QouteResult>
            <QouteText> The tolal is: $ {quote}</QouteText>
        </QouteResult>
    )
}

export default Results