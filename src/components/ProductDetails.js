import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { useParams } from "react-router-dom";

function Detailspage() {

let {id} = useParams();
        const [mydata,myfunction]=useState({})

        useEffect(()=>{
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res)=>{
                console.log(res.data);
               myfunction(res.data);
            })  
        })

        return(
          <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="h1 bg-info text-white" >{mydata.id}</h1>
                    <h1 className="h2 bg-primary">{mydata.userId}</h1>
                    <p>{mydata.title}</p>
                    <p>{mydata.body}</p>
                    
                </div>
            </div>
          </div> 
        )


}
export default Detailspage