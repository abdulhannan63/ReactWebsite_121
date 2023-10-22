import React, { useState } from 'react'

const Contact = () => {
  const [data, setdata] = useState({
    fullname: '',
    phone: "",
    email: "",
    msg: ""
  });

  const formSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  }
  const inputEv = (event) => {
      const {name,value}=event.target;
      setdata((preval)=>{
        return{...preval,[name]: value}
      })
  }
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Contact</h1>
      </div>
      <div className='container contact_div'>
        <div className='col-md-6 col-10 mx-auto'>
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">FullName</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" name='fullname' value={data.fullname} onChange={inputEv} placeholder="Enter Your Full Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Phnw No.</label>
              <input type="number" className="form-control" id="exampleFormControlInput1" name='phone' value={data.phone} onChange={inputEv} placeholder="number" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" name='email' value={data.email} onChange={inputEv} placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" name='msg' value={data.msg} onChange={inputEv} rows="3"></textarea>
            </div>
            <div className="col-12">
              <button className="btn btn-outline-primary" type="submit">Submit form</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact