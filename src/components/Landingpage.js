import React, { useState } from 'react'

function Landingpage() {

const [a,b]=useState("eeeeeeeee");
const myfunc = ()=>{
  b("abcd");
}
const [bgv,bgf]=useState("orange");

const mycolor = (c)=>{
  console.log(c.target.value);
  bgf(c.target.value);

}



  return (
    <div style={{backgroundColor:bgv}}>
      <fieldset>
        <legend>info</legend>
       <input type="text" value={a}/>
       <h2 onClick={myfunc}>{a}</h2>   
       </fieldset>

       <fieldset>
        <legend>background color</legend>
       <input type="color" onInput={mycolor}/> 
       <p>{bgv}</p>  
       </fieldset>
    </div>
  )
}

export default Landingpage