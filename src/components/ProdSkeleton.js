import React,{Fragment} from "react";
import Skeleton from "react-loading-skeleton";
import {SkeletonTheme} from "react-loading-skeleton";
const ProdSkeleton = (props) => {
    return (
        <Fragment>
      
        <SkeletonTheme color='lightgray' highlightColor="gray">
          {Array(4)
            .fill()
            .map((item, index) => (
          
               
                <Skeleton className='product' height={200} width={200}  />
              
            ))}
      </SkeletonTheme>
      </Fragment>
    //   <Fragment>
      
    //     <SkeletonTheme color='lightgray' highlightColor="gray">
    //       {Array(4)
    //         .fill()
    //         .map((item, index) => (
          
    //             <div className='product'>
              
              
    //                 <h1>{props.name || <Skeleton/>}</h1>
    //                 <h1>{props.name || <Skeleton/>}</h1>
    //                 <p>{props.price || <Skeleton/>}</p>
    //                 </div>
                
    //         ))}
    //   </SkeletonTheme>
    //   </Fragment>

    );
  };

  export default ProdSkeleton;