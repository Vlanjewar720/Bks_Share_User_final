import React from 'react'
import { Link } from 'react-router-dom'
import { Route,Routes } from "react-router-dom"

function setting() {
  return (
    <div>
        <Routes>
            <Route path='/setting2' element={<Setting2/>}/>
        </Routes>
      <nav>
        <Link to="/setting2">My Profile</Link>
        <Link to='/Asettingdetails'>Change Password</Link>
      </nav>
    </div>
  )
}

export default setting
