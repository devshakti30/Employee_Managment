import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const EditEmployee = () => {

    const { id } = useParams()

  const getData=async()=>{
    const data = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res)=>{
      setName(res.data.name)
      setEmail(res.data.email)
      setUser(res.data.username)
    })
  }

  useEffect(()=>{
    getData()
  })


  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUser] = useState("")

  const handelsubmit=()=>{
    const postId=10
    if(name && email && username){

  
    const data={
      postId,
      name,
      email,
      username
    }
    axios.put(`https://jsonplaceholder.typicode.com/comments/${id}`,data)
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

  const handelreset = () => {
    setName("")
    setEmail("")
    setUser("")
  }
  return (
    <>
     <h1 className='text-center bg-warning'>Update Emoloyee</h1>
      <div className="container-fluid">
        <label>Full Name</label>
        <input type="text" onChange={(e) => { setName(e.target.value) }} value={name} className="form-control" />
        <label>Email</label>
        <input type="email" onChange={(e) => { setEmail(e.target.value) }} value={email} className="form-control" />
        <label>User Name</label>
        <input type="text" onChange={(e) => { setUser(e.target.value) }} value={username} className="form-control" />
        <input type="button" onClick={handelsubmit} className="btn btn-primary mx-5" value="Submit" />
        <input type="button" onClick={handelreset} className="btn btn-info mx-5" value="Reset" />
      </div>
    </>
  )
}

export default EditEmployee