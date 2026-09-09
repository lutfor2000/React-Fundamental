import { sculptureList } from "../data/data";
import { useState } from "react";

const Gallery = () => {

        const [index, setIndex] = useState(0)
        

        function handleClick() {
            if(index < sculptureList.length-1){
                setIndex(index+1)
            }
        }

        function handlePrivew(){
            if (index > 0) {
                setIndex(index-1)
            }
        }

        let sculpture = sculptureList[index];
         
    return (

        <div>
            <button onClick={handleClick}>Next </button>
            <h2>

            <i>{sculpture.name} </i>
            by {sculpture.artist}
            </h2>

            <h3>
            ({index + 1} of {sculptureList.length})
            </h3>

            <img
            src={sculpture.url}
            alt={sculpture.alt}
            />

            <p>
            {sculpture.description}
            </p>

            <button onClick={handlePrivew}>Preview</button>
        </div>

    );
};

export default Gallery;
