import React from 'react';
import { sculptureList } from '../data/data';
import { useState } from 'react';

const ShowMore = () => {


    const [index, setIndex] = useState(0)
    const [showMore, setShowMore] = useState(false)

    const heandelNextClick = () =>{
       if(index < sculptureList.length - 1){
         setIndex(index+1)
       }
    }

    const heandelShowMore =()=>{
        setShowMore(!showMore)
    }

    let sculpture = sculptureList[index];

    return (
        <div>

            <button onClick={heandelNextClick}>Next</button>

            <h2>
               <i>{sculpture.name}</i>
               by <span className='text-red-400'>{sculpture.artist}</span>
            </h2>

            <h3>
                {index+1} of {sculptureList.length}
            </h3>

            <button onClick={heandelShowMore}>{showMore ? "Hide" : "Show"} Details</button>

            {showMore && <p>{sculpture.description}</p>}

            <img src={sculpture.url} alt="" />
            
        </div>
    );
};

export default ShowMore;
