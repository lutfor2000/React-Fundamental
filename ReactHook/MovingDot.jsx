import { useState } from 'react';

const MovingDot = () => {

    const[position, setPosition] = useState({ x:0, y:0 })
     
    const moveFunction = (e)=>{
         setPosition({
                x : e.clientX,
                y : e.clientY,
            })
    }


    return (


        <div>

            <div onPointerMove={moveFunction} style={{width: "100vw",height: "100vh",position: "relative"}} >
            </div>

            <div style={{position: "absolute",top:"0",left:"0", backgroundColor: "red",height:"20px",width:"20px",borderRadius:"50%",transform:`translate(${position.x}px, ${position.y}px)`}}>

            </div>

        </div>
             
    );
};

export default MovingDot;
