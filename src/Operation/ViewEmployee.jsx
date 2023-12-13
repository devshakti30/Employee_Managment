import React, { useEffect, useState } from 'react'
import "../App.css"
import axios from 'axios'
import { Link } from 'react-router-dom'

const ViewEmployee = () => {

    const [apidata, setData] = useState([])
    const getData = async () => {
        const mydata = await axios.get('https://jsonplaceholder.typicode.com/users')
        setData(mydata.data)
    }

    useEffect(() => {
        getData()

    }, [])
    apidata.map(() => {
        // console.log(re.id);
    })

    const handelDelete=()=>{
        swal("Are you sure","you want to delete the recored","warning",{buttons:true})
        .then((goDelete)=>{
            if(goDelete){
                axios.delete(`https://jsonplaceholder.typicode.com/user/${id}`)
                .then(()=>{
                    swal("Sucessfull","delete","success")
                })
                navigate("/")
                .catch(()=>{
                    swal("faild to delete"," not delete","error")
                })
            }
        })
    }
    return (
        <div className="container-fluid">
            <h1 className='card text-center text-primary my-5'>All Employee Recored <Link to={'/addemployee'}><input type="button"  className="btn btn-primary mx-5" value="ADD Employee" /></Link> </h1>
           

            <table class="table table-success table-stripeds">
                <thead>
                    <tr>
                        <th scope="col">SL No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">User Name</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {apidata.map((response) => {
                        return (<tr>
                            <th scope="row">{response.id}</th>
                            <td><Link to={`editemployee/${response.id}`}>{response.name}</Link></td>
                            <td>{response.email}</td>
                            <td>{response.username}</td>
                            <td><button className="card-link btn btn-danger" onClick={handelDelete}>Delete</button></td>
                        </tr>)

                    })}


                </tbody>
            </table>
        </div>
    )
}

export default ViewEmployee