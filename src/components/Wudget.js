import React from 'react';
import ProdCard from './ProdCard';


const Wudget=(props)=> {
    return (
    

   <ProdCard  name={props.name} price={props.price}/>

     
      // <div className='product'>
     
      // </div>
 
    );
  }

  export default Wudget;