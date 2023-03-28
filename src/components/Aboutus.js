import React from 'react';
import xyz from "../pictures/img2.jpg";

function Aboutus() {
  // const a=500;
  const myimg = "https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg";
  return (
   <div className='container-fluid'>
    <div className='row'>
      <div className='col-md-4'>
        <section className='border p-3'>
          <p className='h1'>A web page or ppppppppppppppp webpage is a document, c</p>
          <p>A web page is a hypertext document on the World Wide Web. Web pages are delivered by a web server to the user and displayed in a web browser. A website consists of many web pages linked together under a common domain name. The name "web page" is a metaphor of paper pages bound together into</p>
          <img src='image/img4.jpg' alt="aboutpic" className='img-fluid'  />
        </section>
      </div>
      <div className='col-md-4'>
        <section className='border p-3'>
          <p className='h1'>A web page or webpage is a document, c</p>
          <p>A web page is a hypertext document on the World Wide Web. Web pages are delivered by a web server to the user and displayed in a web browser. A website consists of many web pages linked together under a common domain name. The name "web page" is a metaphor of paper pages bound together into</p>
          <img src={xyz} className="img-fluid" alt='rightimg' />
        </section>
      </div>
      <div className='col-md-4'>
        <section className='border p-3'>
          <p className='h1'>A we b page or webpage is a document, c</p>
          <p>A web page is a hypertext document on the World Wide Web. Web pages are delivered by a web server to the user and displayed in a web browser. A website consists of many web pages linked together under a common domain name. The name "web page" is a metaphor of paper pages bound together into</p>
          <img src={myimg} className="img-fluid" alt="midimg" />
        </section>
      </div>
    </div>
    
   </div>
  )
}

export default Aboutus