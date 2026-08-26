const Item = ({name,isPacked})=>{

    // if(isPacked){
    //     return <li className="ml-10">Start : {name} ✅</li> 
    // }

    return(
        <div className="w-80 m-auto mt-3">
            <li className="ml-10 ">{ isPacked ? ( <del>{name + "✅"}</del>) : (<li className="bg-green-400">{name}</li>) }</li>
        </div>


    )
    

}

//=====Or=======
const Item = ({name,isPacked})=>{

    const jsxToRender =  isPacked ? ( <del>{name + "✅"}</del>) : (<li className="bg-green-400">{name}</li>)

    return(
       <div className="w-80 m-auto mt-3"> <li> {jsxToRender}</li> </div>

    )
    
}

//=====Next Page=========
import Item from "./Item"

const PakegList = () => {
    return (
        <div className="mt-10">
            <Item isPacked={true} name="Lutfor Rhaman Shanto"/>
            <Item isPacked={true} name="This is My Account"/>
            <Item isPacked={false} name="This Account ok"/>
        </div>
    );
};

export default PakegList;
