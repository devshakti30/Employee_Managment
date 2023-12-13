import axios from 'axios'
import React, { useState } from 'react'
import swal from 'sweetalert'

const AddEmployee = () => {
    const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [username,setUser]=useState()

  const handelsubmit=()=>{
    const postId=10
    if(name && email && username){

  
    const data={
      postId,
      name,
      email,
      username
    }
    axios.post(`https://jsonplaceholder.typicode.com/user`,data)
    .then(()=>{
      swal(" Your data is Added ","success")
     ;})
      .catch(()=>{
        swal("Not Adder",{variant:"error"})
      
      // console.log("!!!Error!!!")
      ;})
    }
    else{
      swal("Not Adder",{variant:"error"});
    }
  };

  const handelreset=()=>{
    setName("")
    setEmail("")
    setUser("")
  }

  return (
    <>
     <h1 className='text-center bg-warning'>Add Emoloyee</h1>
    <div className="container-fluid">
        <label>Full Name</label>
        <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name} className="form-control" />
        <label>Email</label>
        <input type="email"onChange={(e)=>{setEmail(e.target.value)}} value={email} className="form-control" />
        <label>User name</label>
        <input type="text" onChange={(e)=>{setUser(e.target.value)}} value={username} className="form-control" />
        <input type="button" onClick={handelsubmit} className="btn btn-primary mx-5" value="Submit" />
        <input type="button" onClick={handelreset} className="btn btn-info mx-5" value="Reset"/>
      </div>
    </>
  )
}

export default AddEmployee