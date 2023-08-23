import { Box, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import UsersCard from './UsersCard'
import UsersList from './Users'
import BilllingCard from '../BillingCard/BilllingCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SingleCard = () => {
  const [singelData,setSingleData] = useState<any>({})
  const {id} = useParams();
  //console.log("id", id);

  const getSingelData=()=>{
      axios.get(`http://localhost:8080/users/${id}`)
      .then(res=>{
        setSingleData(res.data)
      })
      .catch(err=>{
        console.log(err.message)
      })
  }

  useEffect(()=>{
    getSingelData()
  },[id]);

  console.log("single data", singelData)

  return (
    <div>
       <Flex ml={"10px"} gap={"0px"} bgColor={"#e3f2fd"}>
      <Box  overflow={"scroll"} border={"2px solid transprent"} width={"398px"} height={"790px"}>
       <UsersList/>
      </Box>
      <Box border={"2px solid transprent"} width={"840px"} height={"200px"}>
       <Box> <BilllingCard name={singelData.first_name} age={singelData.age} gender={singelData.gender} billNo={singelData.billNo}/> </Box>
      </Box>
      </Flex>
    </div>
  )
}

export default SingleCard