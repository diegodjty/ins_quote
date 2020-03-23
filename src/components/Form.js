import React from 'react'

const Form = () => {
    return (
        <form>
            <div>
                <label htmlFor=""> Make </label>
                <select name="" id="">
                    <option value="">--- Select ----</option>
                    <option value="American">American</option>
                    <option value="European">European</option>
                    <option value="Asian">Asian</option>
                </select>
            </div>
            <div>
                <label htmlFor=""> Year </label>
                <select name="" id="">
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
                </select>
            </div>

            <div>
                <label>Plan</label>
                <input 
                    type="radio"
                    name="plan"
                    value="basic"
                /> Basic
                <input 
                    type="radio"
                    name="plan"
                    value="full"
                /> Full
                
            </div>

            <button type="button">Quoute</button>
            
        </form>
    )
}

export default Form
