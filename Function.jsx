================Funtional Components/Array Function=======================
const Function = () => {
    return (
        <div>
          
        </div>
    );
};

export default Function;

-----------ekhane Function Hocce akta component--------------------

========================Aleart Function==================
    const App = () => {

  return (
   <div>
     <button onClick={()=>alert("I am Lutfor Rhaman")}>Submit</button>
   </div>
  );
};

================================Basic Text/ Css Use====================
    const App = () => {

  return (
   <div style={{ textAlign: 'center' }}>
     <h1 style={
      {color:"red"}
     }>{2+2}</h1>
     <About/>
     <Function/>

   </div>
  );
};

export default App;

========================================Shoart Hand If else==============================
const Function = () => {
    const mark = 70;
    return (
        <div>
            { mark>=80 ? <h2>Briliant Result</h2> : <h2>Avarage Result</h2> }
        </div>
    );
};
export default Function;

======================================Immediately Invoked Function/Name Behin Function==============================
    const Function = () => {
    const mark = 50;
    return (
        <div>
            {(()=>{

               if(mark >= 80 && mark <= 100){

                return <h2>A+</h2>

               }
               else if(mark >= 60 && mark <=70){
                
                return <h2>A</h2>

               }
               else{

                return <h2>F</h2>

               }


            })()}
        </div>
    );
};

export default Function;

===========================================================Images Add ========================================
import React from 'react';
const Images = () => {
    return (
        <div>
            <img style={{width: '500px'}} src="https://images.pexels.com/photos/33539411/pexels-photo-33539411.png" alt="" />
        </div>
    );
};

export default Images;

==========================================Time Add =============================================
<h2>{new Date().toLocaleString()}</h2>
