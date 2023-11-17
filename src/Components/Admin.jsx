import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import './ems.css'
import axios from 'axios'
import { base_url } from '../base_url';

function Admin() {

const [employee,setEmployee]=useState([])
  //fetching data
  const fetchEmployee=async()=>{
    const {data}=await axios.get(`${base_url}/getemployee`)
    console.log(data.message)
    setEmployee(data.message)
  }

  //deleting
  const deleteEmp=async(id)=>{
      const response=await axios.delete(`${base_url}/deleteemployee/${id}`)
      if(response){
        alert('Deleted Successfully')
        fetchEmployee()
      }
  }

  useEffect(()=>{
    fetchEmployee()
  },[])
  return (
    <div className='main'>
        <div className="container">
            <h3 className='m-3 text-center'>Employee Mangement System</h3>
            <p>Employment security is on every employee’s mind. They shouldn’t have to worry about losing their job after every performance review. Keep your employees focused on the future by setting up longterm goals. Assigning them special projects can also show that you trust their skills, so they aren’t worried about seeming incompetent. And in times of hardship, many of the top companies forgo lay-offs in favor of temporary pay cuts or hiring freezes.</p>
        </div>
        <div className="container">
            <Link to={'/add'}>
            <button className='btn btn-secondary'>Add Employee</button>
            </Link>
        </div>
        <div className="container">
        <MDBTable hover>
      <MDBTableHead>
        <tr>
          <th scope='col'>No</th>
          <th scope='col'>Name</th>
          <th scope='col'>Age</th>
          <th scope='col'>Designation</th>
          <th scope='col'>Salary</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
          employee.map((emp)=>(
            <tr>
          <th scope='row'>{emp.id}</th>
          <td>{emp.Name}</td>
          <td>{emp.Age}</td>
          <td>{emp.Designation}</td>
          <td>{emp.Salary}</td>
          <td>
            <div>

              <Link to={`view/${emp.id}`}>
                <button className='btn btn-primary m-1' >View</button>
              </Link>

              <Link to={`edit/${emp.id}`}>
              <button className='btn btn-success m-1'>Edit</button>

              </Link>
              <button onClick={()=>{deleteEmp(emp.id)}} className='btn btn-danger m-1'>Delete</button>

             
            </div>
          </td>
        </tr>
          ))
        }
      </MDBTableBody>
    </MDBTable>
        </div>
    </div>
  )
}

export default Admin