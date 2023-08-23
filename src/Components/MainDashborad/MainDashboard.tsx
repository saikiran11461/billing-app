import { Box } from '@chakra-ui/react'
import React from 'react'
import SideNavbar from '../SideNavbar/SideNavbar'
import RightComponent from '../../RightComponent/RightComponent'
import Billing from '../../Pages/Billing'

const MainDashboard = () => {
  return (
    <>
        <Box position={"relative"} border={"2px solid transprent"} width={"1438px"} margin={"auto"} height={"960px"} display={"flex"} >
            <Box borderBottomLeftRadius={"20px"} borderTopLeftRadius={"20px"} border={"2px solid tranprent"} bgColor={"#312E81"} width={"293px"} height={"960px"}><SideNavbar/></Box>
            <Box backgroundColor={"#F1F5F9"} border={"2px solid transprent"} width={"1192px" } height={"960px"} position={"absolute"} bgColor={"#fff"} left={"256px"} borderRadius={"20px"}> <RightComponent/> </Box> 
            
        </Box>
    </>
  )
}

export default MainDashboard