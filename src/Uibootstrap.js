import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BsBadgeCcFill,BsBagXFill,BsBalloonHeartFill } from "react-icons/bs";
import { FcAssistant,FcDislike } from "react-icons/fc";

function Uibootstrap() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
            <form>
                <div className="mb-3">
                    <label className="form-label"><BsBadgeCcFill/>Email address</label>
                    <input type="email" className="form-control"/>
                    <div id="emailHelp" className="form-text"> We'll never share your email with anyone else.</div>
                    <h1><FcAssistant/>
                    <FcDislike/>
                    </h1>
                </div>
                <div className="mb-3">
                    <label className="form-label"><BsBalloonHeartFill/> Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input"/>
                    <label className="form-check-label"><BsBagXFill/>Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>

        
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                    </button>

                   
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <form>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input"/>
                    <label className="form-check-label">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>



            </div>
        </div>
    </div>
  )
}

export default Uibootstrap