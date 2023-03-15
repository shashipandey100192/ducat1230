import React, { Fragment } from 'react';
import './style.css';

function Home() {
  const a = 50;
//  return "this is text";
// return 5545;
// return a;
  // return <h1>thi is heading</h1>

  // return(
  //   <div>
  //         <h1>this structure for multi element</h1>
  //         <h2>jdfhsjkdfhjskdhfj</h2>
  //         <p>this is paragraph</p>
  //   </div>
  // )
  return(
    <Fragment>
          <h1 className='first'>this structure for multi element</h1>
          <h2 className='second'>jdfhsjkdfhjskdhfj</h2>
          <p style={{color:'red',backgroundColor:'blue'}}>inline css</p>
          <p style={{'color':'red','background-color':'blue'}}>inline css</p>
    </Fragment>
  )
  


}

export default Home