import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import Patinents from '../Pages/Patinents'
import Appointment from '../Pages/Appointment'
import Billing from '../Pages/Billing'
import SingleCard from '../Components/Users/SingleCard'

const AllRouts = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/patient' element={<Patinents/>}/>
            <Route path='/appointment' element={<Appointment/>}/>
            <Route path='/billing' element={<Billing/>}/>
            <Route path='/singlecard/:id' element={<SingleCard/>}/>
        </Routes>
    </div>
  )
}

export default AllRouts