import React from 'react';
import {useState,useEffect} from 'react';
import Widget from './Widget';
import ProdSkeleton from './ProdSkeleton';


import Skeleton from 'react-loading-skeleton';


const Widgets =({prods})=>{

    const [prod, setProd] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      const timer = setTimeout(() => {
        setProd(prods);
        setLoading(false);
      }, 250);
      return () => clearTimeout(timer);
    }, []);

    return (
  
    <div>
     
     {<h1 className='title'>Widgets</h1>}
      {loading && <ProdSkeleton/>}
      {!loading &&
        prods.map(prod=>(
        
          <Widget name={prod.name} price={prod.price} />
    
        ))}
  

 

    </div>
    // </>
    )};
  
  
  export default Widgets;