import React from 'react';
import "./style.css";
import Mychilds from './Childs';

function Parents() {
    var a="kumar";
  return (
    <div className="container border">
        <div className='parent'>Parents {a}</div>
        {/* <Mychilds mytext="computer"></Mychilds> */}
        <Mychilds mytext={a}></Mychilds>
    </div>
  )
}

export default Parents