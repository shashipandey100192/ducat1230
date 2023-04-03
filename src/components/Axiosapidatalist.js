import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Axiosapidatalist() {

const [datav,dataf]=useState([]);

const myapifunc = ()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
        console.log(res.data);
        dataf(res.data);
    })  
}

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12'>
                <button type='button' onClick={myapifunc}>getdata from api</button>
            </div>
        </div>
        <div className='row'>
            <div className='col-12'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>#Id</th>
                            <th>userId</th>
                            <th>title</th>
                            <th>body text</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datav.map((x)=>{
                            return(
                                <tr key={x.id}>
                                    <td>{x.id}</td>
                                    <td>{x.userId}</td>
                                    <td>{x.title}</td>
                                    <td>{x.body}</td>
                                    <td width="200">
                                       <button className='btn btn-danger btn-sm'>Delete</button> 
                                       <button className='btn btn-info btn-sm'>Edit</button>
                                       <Link className='btn btn-warning btn-sm' to={`${x.id}`}>View</Link>
                                    </td>
                                </tr>
                                )   
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Axiosapidatalist