import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { RxDashboard, RxPadding } from "react-icons/rx";
import { RiBillLine } from "react-icons/ri";
import { SlSupport } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { MdSick } from "react-icons/md";
import "./SideNavbar.css"
import { Link } from 'react-router-dom';
const SideNavbar = () => {
  return (
    <>
        <Box position={"relative"} color={"#fff"}>
            <Box width={"92px"} height={"30px"} position={"absolute"} top={"47px"} left={"36px"}>
                <Text  fontWeight={700} fontSize={"30px"} lineHeight={"30px"}>LOGO</Text>
            </Box>

            <Box  border={"2px solid transprent"} width={"164px"} height={"230px"} position={"absolute"} top={"149px"} left={"36px"}>
            <Link to={"/"}>   <Flex justifyContent={"space-between"} alignItems={"center"}  className='hover' position={"relative"}>
                    <RxDashboard size={"30px"} />
                    <Text position={"absolute"} left={"60px"}  fontWeight={400} fontSize={"18px"} lineHeight={"24px"}>Dashboard</Text> 
                </Flex>
                </Link>

                <Link to={"/patient"}>
                <Flex justifyContent={"space-between"} alignItems={"center"} className='hover' mt={"37px"}>
                <MdSick size={"30px"} />
                <Text position={"absolute"} left={"60px"}  fontWeight={400} fontSize={"18px"} lineHeight={"24px"}>Patinet</Text>
                
                </Flex>
                </Link>

                    <Link to={"/appointment"}>
                <Flex justifyContent={"space-between"} alignItems={"center"} className='hover' mt={"37px"} position={"relative"}>
                    <SlCalender size={"30px"} />
                    <Text position={"absolute"} left={"60px"}  fontWeight={400} fontSize={"18px"} lineHeight={"24px"}>Appointment</Text>

                </Flex>
                    </Link>

                    <Link to={"/billing"}>
                <Flex justifyContent={"space-between"} alignItems={"center"} className='hover' mt={"37px"} position={"relative"}>
                    <RiBillLine size={"30px"}/>
                    <Text position={"absolute"} left={"60px"}  fontWeight={400} fontSize={"18px"} lineHeight={"24px"}>Billing</Text>

                </Flex>
                    </Link>
                <Box width={"206px"} border={"1px solid #939393"} marginTop={"30px"} position={"absolute"} left={"-20px"} bgColor={"#939393"}></Box>  
            </Box>

            <Box border={"2px solid transprent"} position={"absolute"} width={"164px"} left={"36px"} mt={"820px"}>
            <Flex className='hover'  position={"relative"}>
                    <SlSupport size={"30px"} />
                    <Text position={"absolute"} left={"60px"}  fontWeight={400} fontSize={"18px"} lineHeight={"24px"}>Support</Text>
                </Flex>

                <Flex className='hover' mt={"30px"} position={"relative"}>
                    <IoSettingsOutline size={"30px"} />
                    <Text position={"absolute"} left={"60px"}  fontWeight={400} fontSize={"18px"} lineHeight={"24px"}>Setting</Text>
                </Flex>
            </Box>
            
        </Box>

       

    
    </>
  )
}

export default SideNavbar