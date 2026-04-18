=>Props হলো parent component থেকে child component-এ data পাঠানোর একটি মাধ্যম।

1.==========================Parent Component======================================
import Hero from "./components/Hero"
function App() {
  return (
    <div>
      <Hero title="Lutfor Rhaman Shanto" age="24"/>
    <div/>
  )
}

export default App

  

1.==========================Child Component======================================
const Hero = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h1>{props.age}</h1>
        </div>
    );
};

export default Hero;

2.==========================Object Passed Parent======================================
function App() {

  const objectName ={
        name: "Lutfor Rhaman",
        age: 24,
        city: "Dhaka"
    }

  return (
    <>
      <Hero item={objectName}/>
    </>
  )
}

export default App

2.==========================Object Passed Child======================================
const Hero = (props) => {
    
    return (
        <div>
            <ul>
                <li>Name: {props.item['name']}</li>
                <li>Age: {props.item['age']}</li>
                <li>City: {props.item['city']}</li>
            </ul>
        </div>
    );
};

export default Hero;

3.==========================Function Valu Passed Parent======================================
function App() {

const onBtnClick = ()=>{
    alert("Submit Successfull !");
}

  return (
    <>
      <Hero childBtn ={onBtnClick}/>
    </>
  )
}

export default App

3.==========================Function Valu Passed Child======================================

const Hero = (props) => {
    
    return (
        <div>
            <button onClick={props.childBtn}>Submit Document</button>
        </div>
    );
};

export default Hero;
