import React, {useState} from 'react'
import {getYearDifference, calculateMake, getPlan} from '../helper'

import styled from '@emotion/styled';

const Field = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center; 
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover{
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Form = ({handelSummary}) => {


    const [data, handelData] = useState({
        make:'',
        year:'',
        plan:''
    });
    const [error, handelError] = useState(false);
    const {make,year,plan} = data;

    const getData = e =>{
        handelData({
            ...data,
            [e.target.name] : e.target.value
        })
    }
    const handelQuote = e =>{
        e.preventDefault();
        if(make.trim() === '' || year.trim() === '' || plan.trim() === ''){
           handelError(true);
           return; 
        }
        handelError(false);
        let base = 2000; // Base price
        const difference = getYearDifference(year); // Get year difference 
        base -= ((difference * 3) * base ) / 100; // For each year substarct a 3%
        // American 15%
        // Asian 5%
        // European 30%
        console.log( base )
        base = calculateMake(make) * base;
        // Basic 20%
        // Full 50%
        console.log( base )
        const planIncrement = getPlan(plan)
        
        base = parseFloat( planIncrement * base ).toFixed(2);
        
        // Total
        handelSummary({
            quote: base,
            data
        })
    }

    return (
        <form
            onSubmit={handelQuote} 
        >
            { error ? <Error>All fields are required</Error> :null}

            <Field>
                <Label> Make </Label>
                <Select
                   name='make'
                   value={make} 
                   onChange={getData}
                >
                    <option value="">--- Select ----</option>
                    <option value="american">American</option>
                    <option value="european">European</option>
                    <option value="asian">Asian</option>
                </Select>
            </Field>
            <Field>
                <Label htmlFor=""> Year </Label>
                <Select
                    name='year'
                    value={year} 
                    onChange={getData}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>

            <Field>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basic"
                    checked={plan ==="basic"}
                    onChange={getData}
                /> Basic
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="full"
                    checked={plan ==="full"}
                    onChange={getData}
                /> Full
                
            </Field>

            <Button type="submit">Quote</Button>
            
        </form>
    )
}


export default Form