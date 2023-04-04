import React from 'react';
import { useForm } from 'react-hook-form';

function Mybootstrapform() {
    const { register, handleSubmit, watch, formState: { errors }} = useForm();
  const onSubmit = data => console.log(data);


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className='container bg-light p-5 shadow mt-5'>
        <div className='row'>
            <div className='col-md-6'>
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" {...register("fullname",{ required: true })}/>
                {errors.fullname && <span className='text-danger'>This field is required</span>}
            </div>
            <div className='col-md-6'>
                <label className="form-label">Email id</label>
                <input type="email" className="form-control" {...register("email",{ required: true })}/>
                {errors.email && <span className='text-danger'>This email is required</span>}
            </div>
            <div className='col-md-6'>
                <label className="form-label">Phone no</label>
                <input type="text" className="form-control" {...register("phone",{ required: true })}/>
                {errors.phone && <span className='text-danger'>This phone is required</span>}
            </div>
            <div className='col-md-6'>
                <label className="form-label">Address</label>
                <input type="text" className="form-control" {...register("address",{ required: true })} />
                {errors.address && <span className='text-danger'>This address is required</span>}
            </div>
            <div className='col-12 text-center mt-3'>
                <button type='submit' className='btn btn-success'>submit</button>
            </div>
        </div>
    </div>
    </form>
  )
}

export default Mybootstrapform