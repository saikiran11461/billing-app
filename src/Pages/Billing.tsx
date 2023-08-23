import { Box, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import UsersCard from '../Components/Users/Users'
import SingleCard from '../Components/Users/SingleCard'
import BilllingCard from '../Components/BillingCard/BilllingCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Billing = () => {
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
  return (
    <div>
      <Flex ml={"10px"} gap={"0px"}>
      <Box  overflow={"scroll"} border={"2px solid transprent"} width={"380px"} height={"790px"}>
        <UsersCard/>
      </Box>
      <Box border={"2px solid transprent"} width={"756px"} height={"200px"}>
       <Box> <BilllingCard name={singelData.first_name} age={singelData.age} gender={singelData.gender} billNo={singelData.billNo}/></Box>
      </Box>
      </Flex>
     
    </div>
  )
}

export default Billing