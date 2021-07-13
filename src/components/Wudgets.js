import React, { Fragment } from 'react';
import Wudget from './Wudget';
import Button from '@material-ui/core/Button';




const Wudgets =({prods,applyDiscount})=>{

    
    return (
    <Fragment>
     
     {<h1 className='title'>Wudgets</h1>}
      {prods.map(prod=>(
        <Wudget name={prod.name} price={prod.price} />
  
      ))}
    <br/>
    <br/>
    &nbsp;Enter Discount Code:&nbsp;<input  type='text' id='txtcode' name='txtcode' ></input>
  
    &nbsp;&nbsp;<Button  variant="contained" color="primary"  onClick={applyDiscount} >Apply Discount</Button>
  
    </Fragment>

    )};
  
  
  export default Wudgets;