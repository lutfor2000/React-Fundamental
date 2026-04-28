import React, { useState } from 'react';

const TodoApp = () => {
    const [list,setList] = useState([])
    const [item,setItem] = useState("")

    const addToList = ()=>{
        if (item.trim() === "") return; //ফাঁকা হলে add হবে না
        list.push(item)
        setList([...list])
    }

    const removeItem = (index)=>{
       list.splice(index,1) // item add
       setItem([...list]) //input clear
    }

    return (
        <div>
            <div className="container">
                <input onChange={(e)=>setItem(e.target.value)} type="text" placeholder="Item" />
                <button onClick={addToList}>Add</button>
            </div>

            <div className="container">
                <table>
                    <tbody>
                        {
                            list.length !==0?(
                                list.map((element,index)=>{

                                    return(
                                        <tr>
                                            <td>{element}</td>

                                            <td><button onClick={()=>{
                                                removeItem(index)
                                            }}>Remove</button></td>

                                        </tr>
                                    )

                                })
                            ):(
                            
                            <tr>
                                <td>Empty</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default TodoApp;



=========================Last data First A Show korbe==================
    const addToList = () =>{
        if(item.trim() === "") return;

         setList([item, ...list]);
         setItem("");
        // list.push(item)
        // setList([item, ...list])
        // setItem("");

      }
