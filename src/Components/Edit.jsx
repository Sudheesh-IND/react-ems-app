import React, { useEffect, useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { base_url } from '../base_url';


function Edit() {

  const [employee,setEmployee]=useState([])
  //create state for each object key
  const [empId,setEmpId]=useState('')
  const [empName,setEmpName]=useState('')
  const [empAge,setEmpAge]=useState('')
  const [empDesignation,setEmpDesignation]=useState('')
  const [empSalary,setEmpSalary]=useState('')

  
  

  const {id}=useParams()
  console.log(id)
  const navigate=useNavigate()

  const fetchEmployee=async()=>{

    const {data}=await axios.get(`${base_url}/getemployee/${id}`)
    console.log(data.message)
    setEmployee(data.message)
    setEmpId(data.message.id)
    setEmpName(data.message.Name)
    setEmpAge(data.message.Age)
    setEmpDesignation(data.message.Designation)
    setEmpSalary(data.message.Salary)
  }

  //function for update
  const update=async()=>{
    const body={
      empId,empName,empAge,empDesignation,empSalary
    }
     const response=await axios.post(`${base_url}/update/${id}`,body)

     if(response){
      alert('Employee details updated successfully')
      navigate('/')
     }
  }

  useEffect(()=>{
    fetchEmployee()
  },[])
  return (
    <div>
       <div className='main bg-info' >
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="add-emp p-3" style={{marginTop:'100px'}}>
              <form action="" className='p-4 bg-white ' style={{borderRadius:'2rem',boxShadow:'0 0 20px'}} >
                    <div className='mt-4'>
                    <MDBInput disable value={empId}  onChange={(e)=>{setEmpId(e.target.value)}}  style={{height:'45px'}} label='Id' id='typeText' type='text' />
                    </div>
                    <div className='mt-4'>
                    <MDBInput value={empName}  onChange={(e)=>{setEmpName(e.target.value)}}  style={{height:'45px'}} label='Name' id='typeText' type='text' />
                    </div>
                    <div className='mt-4'>
                    <MDBInput value={empAge}  onChange={(e)=>{setEmpAge(e.target.value)}} style={{height:'45px'}} label='Age' id='typeText' type='text' />
                    </div>
                    <div className='mt-4'>
                    <MDBInput value={empDesignation}  onChange={(e)=>{setEmpDesignation(e.target.value)}} style={{height:'45px'}} label='Designation' id='typeText' type='text' />
                    </div>
                    <div className='mt-4'>
                    <MDBInput value={empSalary}  onChange={(e)=>{setEmpSalary(e.target.value)}} style={{height:'45px'}} label='Salary' id='typeText' type='text' />
                    </div>
                    <div className='text-center'>
                      <Link to={'/'}>
                      <button className='btn btn-danger m-3'>Go Back</button>
                      </Link>
                      <button onClick={()=>{update()}} type='button' className='btn btn-success m-3'>Submit</button>
                     
                    </div>
              </form>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Edit