import React, { useState } from 'react';
import "./style.css";

function Errorpage() {
const [myvar, myfunc]=useState("hi");
const myinput = (myelement)=>{
  console.log("hello");
  console.log(myelement.target.value);
  myfunc(myelement.target.value);
}

  return (
    <div className='myerror'>Errorpage
    <input type="text" value={myvar} onInput={myinput}/>
    <h1>{myvar}</h1>
    </div>
  )
}

export default Errorpage