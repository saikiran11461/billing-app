import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./UserCard.css"
import { Link } from 'react-router-dom'
 type userProps={
    id:number,
    avatar:string,
    first:string,
    last:string,
    age:number,
    gender:string,
    billNo:number
}

const UsersCard = (props:userProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    


  return (
    <>
    <Box borderRadius={"5px"} className='card-hover' height={"150px"} mb={"10px"} boxSizing='border-box' padding={"10px"} border={"2px solid transprent"} width={"380px"}>

    <Box  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="card" bgColor={"#cbe3ff"} textAlign={"left"} boxSizing='border-box' padding={"10px"} border={"2px solid lightgray"} height={"130px"}  borderRadius={"10px"}>
            <Flex>
                <Box>
                    <Image borderRadius={"10px"}  width={"110px"}  src={props.avatar} alt="" />
                </Box>
                <Box position={"relative"} ml={"12px"} fontSize={"18px"}>
                    <Text mt={"15px"}>{props.first} {props.last}</Text>
                    <Text>{props.age} {props.gender}</Text>
                    <Text>Bill No:{props.billNo}</Text>
                    {isHovered && (
                      <Link to={`/singlecard/${props.id}`}><Button borderRadius={"20px"} padding={"13px 30px"} position={"absolute"} bottom={"0px"} left={"-5px"} border={"2px solid lightgray"} color={"#3128E1"} >View PresScription</Button></Link>
                      )}
                </Box>
            </Flex>
        </Box>
    </Box>
        
    </>
  )
}

export default UsersCard