==================================use if Conditon==============================
import React from 'react';

const status = false;

const LoginCondition = () => {
      if (status == true) {
         return <button>Login Success !</button>
      }else{
         return <span>Logout</span>
      }
};

export default LoginCondition;

===========================================use switch condition=============================
const LoginCondition = () => {
    const status = true;
    
    switch (status) {
        case true:
            return <button>Login successfull</button>
        case false:
            return <button>Login</button>
        default:
            return <h1>this null Value</h1>;
    }
};

export default LoginCondition;

===========================tarnary operator/shor hand if else=======================================
      const LoginCondition = () => {
    const status = false;
    return(
       <div>
          {
            status?
            <button> Login successful </button>
            :
            <button>Logout user</button>
          }
       </div>
    );
   
};
export default LoginCondition;



===========================================Using Immediately Invoked Function=============================

const status = true;

const LoginLogout = () => {
  
       return(
        <div>
            <h1>Login Status</h1>
            {
                (()=>{

                    if(status == true){
                        return <button>Logout</button>
                    }
                    else{
                        return <button>Login</button>
                    }

                })()
            }
        </div>
       )
};

export default LoginLogout;
