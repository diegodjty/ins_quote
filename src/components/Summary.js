import React from 'react'
import styled from '@emotion/styled'
import {FirstLetterCapital} from '../helper'

const SummaryContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Summary = ({data}) => {

    const {make, year, plan} = data;
    if( make === '') return null;
    return (
        <SummaryContainer>
            <h2>Summary</h2>
            <ul>
                <li>Make: {FirstLetterCapital(make)}</li>
                <li>Plan: {FirstLetterCapital(plan)}</li>
                <li>Car Year: {FirstLetterCapital(year)}</li>
            </ul>
        </SummaryContainer>
    )
}

export default Summary
