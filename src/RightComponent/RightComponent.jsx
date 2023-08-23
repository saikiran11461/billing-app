import React from 'react'
import TopHeader from './TopHeader'
import { Box } from '@chakra-ui/react'
import Billing from '../Pages/Billing'
import AllRouts from '../Routes/AllRouts'

const RightComponent = () => {
  return (
    <div style={{backgroundColor:"#e3f2fd"}}>
      <TopHeader/>
      <AllRouts/>
    </div>
  )
}

export default RightComponent