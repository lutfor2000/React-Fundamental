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
    
