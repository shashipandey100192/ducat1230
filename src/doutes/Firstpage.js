import React from 'react'
import Secondpage from './Secondpage';

function Firstpage() {
    const a = "student life essay2222222222222222222222222";
    const b=10;
  let c;
    if(b>50)
    {
     c=`<i>this is first</i>`;
    }
    else if(b>30)
    {
       c=`<b >this is second condition</b>`;
    }
    else{
        c=`<u>this is false condition</u>`;
    }


    const studentdetails = `Student life is one of the most memorable phases of a 
    person’s life. The phase of student life builds the foundation of our life. In 
    student life, we do not just learn from books.
     We learn to grow emotionally, physically, philosophically as well as socially.
      Thus, in this "${a}" , we will learn its ${c} essence and importance.`

  return (
    <div>
        <section><h1>Firstpage</h1> {studentdetails}</section>
        <Secondpage stu={studentdetails} dis={a} />
    </div>
  )
}

export default Firstpage