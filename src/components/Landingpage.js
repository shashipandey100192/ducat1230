import React, { useState } from 'react'

function Landingpage() {

  const [a,b]=useState("eeeeeeeee");
const myfunc = ()=>{
  b("abcd");

}


  return (
    <div>
       <input type="text" value={a}/>
       
       <h2 onClick={myfunc}>{a}</h2>   
    </div>
  )
}

export default Landingpage