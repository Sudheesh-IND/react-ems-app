import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { base_url } from '../base_url';

function Add() {

  //for navigate to other page

  const navigate=useNavigate()

  const [id,setId]=useState(0)
  const [name,setName]=useState('')
  const [age,setAge]=useState(0)
  const [designation,setDesignation]=useState('')
  const [salary,setSalary]=useState(0)

 

  const handleAdd=async(e)=>{
    console.log(id,age,name,designation,salary)

    const body={
      id,age,name,designation,salary
    }

    //posting the body top backend
    const response= await axios.post(`${base_url}/addemployee`,body)
    console.log(response)
    if(response){
      alert('added')
      //for redirecting to other page
      navigate('/')
    }
  }

  return (
    <div className='main bg-info' >
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="add-emp p-3" style={{marginTop:'100px'}}>
              <form action="" className='p-4 bg-white ' style={{borderRadius:'2rem',boxShadow:'0 0 20px'}} >
                    <div className='mt-4'>
                    <MDBInput onChange={(e)=>{setId(e.target.value)}} style={{height:'45px'}} label='Id' id='typeText' type='text' />
                    </div>
                    <div className='mt-4'>
                    <MDBInput onChange={(e)=>{setName(e.target.value)}} style={{height:'45px'}} label='Name' id='typeText' type='text' />
                    </div>
                    <div className='mt-4'>
                    <MDBInput onChange={(e)=>{setAge(e.target.value)}} style={{height:'45px'}} label='Age' id='typeText' type='text' />
                    </div>
                    <div className='mt-4'>
                    <MDBInput onChange={(e)=>{setDesignation(e.target.value)}} style={{height:'45px'}} label='Designation' id='typeText' type='text' />
                    </div>
                    <div className='mt-4'>
                    <MDBInput onChange={(e)=>{setSalary(e.target.value)}} style={{height:'45px'}} label='Salary' id='typeText' type='text' />
                    </div>
                    <div className='text-center'>
                      <Link to={'/'}>
                      <button className='btn btn-danger m-3'>Go Back</button>
                      </Link>
                      <button onClick={(e)=>{handleAdd(e)}} type='button' className='btn btn-success m-3'>Submit</button>
                     
                    </div>
              </form>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  )
}

export default Add