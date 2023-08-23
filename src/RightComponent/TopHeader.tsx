import { Box, Button, Flex, Input ,Text} from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSearch,AiOutlineRight,AiOutlineLeft,  } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
const TopHeader = () => {
  return (
    <div>
        <Box boxSize={"border-box"} paddingTop={"36px"} bgColor={"#e3f2fd"}>
            <Flex   border="2px solid transprent" alignItems={"center"} gap={"20px"} >
                <Box position={"relative"} border={"2px solid #312E81"} width={"675px"} height={"46px"}  ml={"28px"} borderRadius={"28px"}>
                   <Box position={"absolute"} top={"10px"} left={"20px"}> <AiOutlineSearch  size={"25px"}  /></Box>
                    <Input ml={"40px"} border={"transparent"} placeholder={"Search Patients"}/>
                </Box>
                <Box >
                    <Button borderRadius={"28px"} width={"236px"} height={"40px"} bgColor={"#312E81"} color={"white"} >Make an Appointment</Button>
                </Box>

                <Box>
                    <Button borderRadius={"28px"} width={"134px"} height={"40px"} bgColor={"#312E81"} color={"white"} >Add Patient</Button>
                </Box>
                <Box position={"relative"} width={"39px"} height={"39px"} borderRadius={"50%"} bgColor={"#312E81"}>
                    <Box position={"absolute"} top={"10px"} left={"10px"} color="white">
                    <BsBell size={"20px"}/>
                    </Box>
                </Box>
            </Flex>

            <Flex mt={"40px"} boxSizing='border-box' padding={"0px 20px"} border={"2px solid transprent"} ml={"28px"} alignItems={"center"} justifyContent={"space-between"}>
                <Box width={"234px"} height={"30px"} fontWeight={"700"} fontSize={"31px"} lineHeight={"30px"}>
                    <Text>Billing Overview</Text>
                </Box>
                <Box>
                    <Box>
                        <Flex boxSizing='border-box' padding={"0px 10px"} borderRadius={"10px"} position={"relative"} width={"276px"} height={"50px"} bgColor={"#CBE3FF"} justifyContent={"space-between"} alignItems={"center"}>
                           <Button color={"white"} bgColor={"#312E81"} fontSize={"25px"}>&lt;</Button>
                            <Text fontSize={"18px"} fontWeight={"400"}>February 2021</Text>
                            <Button color={"white"} bgColor={"#312E81"} fontSize={"25px"}>&gt;</Button>  
                        </Flex>
                    </Box>
                </Box>
            </Flex>

        </Box>
    </div>
  )
}

export default TopHeader