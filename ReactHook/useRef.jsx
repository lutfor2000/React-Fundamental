===============================useRef() Mehod=====================================

০১. useRef হুকটি আপনাকে রেন্ডারগুলোর মধ্যে মান সংরক্ষণ করতে দেয়।

০২. এটি এমন একটি পরিবর্তনযোগ্য মান সংরক্ষণ করতে ব্যবহার করা যেতে পারে, যা আপডেট করা হলে পুনরায় রেন্ডার হয় না।

০৩. এটি ব্যবহার করে সরাসরি কোনো DOM এলিমেন্ট অ্যাক্সেস করা যায়।

DOM Element Access করা
Input, button, div ইত্যাদি সরাসরি ধরতে
যেমন: focus, scroll, select করা
=============================== DOM use useRef()=====================================
import { useRef } from "react";

const Hero = () => {

   const myId = useRef();

   const change =()=>{
      myId.current.innerHTML="Bangali is Boka choda";
   }

    return (
        <div>
           <h1 ref={myId}></h1>
           <button onClick={change}>Click Me</button>
        </div>
    );
};

export default Hero;

=============================== image Property Change  useRef()=====================================
import { useRef } from "react";

const Hero = () => {

    const myImage = useRef();
  
    const change = ()=>{
       myImage.current.src="https://images.pexels.com/photos/5380610/pexels-photo-5380610.jpeg";
       myImage.current.setAttribute('height','500px');
       myImage.current.setAttribute('width','600px');
    }

    return (
        <div>
           <img ref={myImage} style={{width:"500px"}} src="https://images.pexels.com/photos/18069157/pexels-photo-18069157.png"  />
           <button onClick={change}>Click Me</button>
        </div>
    );
};

export default Hero;

=============================== import Value Show  useRef()=====================================
import { useRef } from "react";

const Hero = () => {

    let FirstName,LastName = useRef();
   
  
    const change = ()=>{
        let fName = FirstName.value;
        let lName = LastName.value;

        alert(fName+ " " +lName);
    }

    return (
        <div>
           <input ref={(a)=>FirstName=a} placeholder="Enter First Name" />
           <input ref={(a)=>LastName=a} placeholder="Enter Last Name" />
           <button onClick={change}>Click Me</button>
        </div>
    );
};

export default Hero;
