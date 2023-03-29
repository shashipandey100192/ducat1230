
import React from "react";
import { Link } from "react-router-dom";

function Mygallery()
{
const Mydata = [
    {
        ids:'1',
        name:'appname',
        url:'image/img3.jpg',
        text:'Some quick example text to build on the card title and make up the bulk of the card',
        title:'your title'
    },
    {
        ids:'2',
        name:'appname',
        url:'image/img3.jpg',
        text:'Some quick example text to build on the card title and make up the bulk of the card',
        title:'your title'
    },
    {
        ids:'3',
        name:'appname',
        url:'image/img3.jpg',
        text:'Some quick example text to build on the card title and make up the bulk of the card',
        title:'your title'
    },
    {
        ids:'4',
        name:'appname',
        url:'image/img3.jpg',
        text:'Some quick example text to build on the card title and make up the bulk of the card',
        title:'your title'
    },
    {
        ids:'5',
        name:'appname',
        url:'image/img3.jpg',
        text:'Some quick example text to build on the card title and make up the bulk of the card',
        title:'your title'
    },
    {
        ids:'6',
        name:'appname',
        url:'image/img3.jpg',
        text:'Some quick example text to build on the card title and make up the bulk of the card',
        title:'your title'
    },
    {
        ids:'7',
        name:'appname',
        url:'image/img3.jpg',
        text:'Some quick example text to build on the card title and make up the bulk of the card',
        title:'your title'
    },
    {
        ids:'8',
        name:'appname',
        url:'image/img3.jpg',
        text:'Some quick example text to build on the card title and make up the bulk of the card',
        title:'your title'
    },
]


    return(
        <div className="container-fluid">
            <div className="row">
                {Mydata.map((r)=>{
                        return(
                            <section className="col-md-3 mt-5">
                            <div className="card shadow">
                                <img src={r.url} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{r.title}</h5>
                                    <p className="card-text">{r.title}</p>
                                    <Link to="" className="btn btn-primary">{r.ids}</Link>
                                </div>
                                </div>
                            </section>
                        )
                })}
                
            </div>
        </div>
    )
}
export default Mygallery