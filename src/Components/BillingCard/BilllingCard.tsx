import { Box, Button, Flex, Text, Thead, Table,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, } from '@chakra-ui/react'
import React from 'react'

type billCardPorops={
    name:string,
    age:number,
    gender:string,
    billNo?:number
}

const BilllingCard = (props:billCardPorops) => {
  return (
    <>
        <Box bgColor={"white"} boxSizing='border-box' padding={"30px"} border={"2px solid transprent"} borderRadius={"24px"} width={"766px"} height={"718px"} >
                <Box  position={"relative"} overflow={"hidden"} border={"2px solid black"} width={"697px"} height={"654px"} borderRadius={"24px"}>
                    <Box>
                        <Flex justifyContent={"space-between"} boxSizing='border-box' padding={"30px 30px"}>
                            <Text fontSize={"22px"} fontWeight={"700"} lineHeight={"26px"}>Billing Details</Text>
                            <Button bgColor={"#312E81"} padding={"0px 20px"} borderRadius={"38px"} color={"white"} >Print Bill</Button>
                        </Flex>
                    </Box>

                    <Box  border={"2px solid transprent"} width={"690px"} height={"89px"} bgColor={"#F3F3F3"}>
                    <TableContainer>
  <Table  fontWeight={"300"}>
    <Thead >
      <Tr  >
        <Th fontSize={"12px"} >Patient Name</Th>
        <Th fontSize={"12px"}>Age/Gender</Th>
        <Th fontSize={"12px"} >Bill No</Th>
        <Th fontSize={"12px"}>Date /Time</Th>
        <Th fontSize={"12px"}>Receipt No</Th>
       
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
      <Th fontSize={"12px"}>{props.name ? props.name :"No patient"}</Th>
        <Th fontSize={"12px"} >{props.age ? props.name :"NA"}/{props.gender ? props.name :"NA"}</Th>
        <Th fontSize={"12px"} >{props.billNo ? props.name :"NA"}</Th>
        <Th fontSize={"12px"}>{Date.now()}</Th>
        <Th fontSize={"12px"}>6644556</Th>
      </Tr>
      {/* <Tr>
      <Th>Patient Name</Th>
        <Th>Age/Gender</Th>
        <Th isNumeric>Bill No</Th>
        <Th>Date /Time</Th>
        <Th>Receipt No</Th>
      </Tr>
      <Tr>
      <Th>Patient Name</Th>
        <Th>Age/Gender</Th>
        <Th isNumeric>Bill No</Th>
        <Th>Date /Time</Th>
        <Th>Receipt No</Th>
      </Tr> */}
    </Tbody>
    {/* <Tfoot>
      <Tr>
      <Th>Patient Name</Th>
        <Th>Age/Gender</Th>
        <Th isNumeric>Bill No</Th>
        <Th>Date /Time</Th>
        <Th>Receipt No</Th>
      </Tr>
    </Tfoot> */}
  </Table>
</TableContainer>

                    </Box>

    <Box fontWeight={700} border={"2px solid transprent"} width={"695px"} height={"50px"}>
        <Box>
            <Flex boxSizing='border-box' padding={"0px 6px"} height={"50px"} justifyContent={"space-between"} alignItems={"center"}>
                <Box>
                    <Flex fontSize={"20px"} lineHeight={"27px"} width={"200px"} border={"2px solid transprent"} justifyContent={"space-between"}>
                        <Text>S.no</Text>
                        <Text>Service Name</Text>
                    </Flex>
                </Box>
                <Box>
                    <Flex fontSize={"20px"} lineHeight={"27px"} width={"250px"} border={"2px solid transprent"} justifyContent={"space-between"}>
                        <Text>Price</Text>
                        <Text>Quantity</Text>
                        <Text>Amount</Text>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    </Box>

    <hr style={{border:"1px solid lightgray"}} />

    <Box border={"2px solid transprent"} width={"695px"} height={"50px"}>
        <Box>
            <Flex textAlign={"left"} boxSizing='border-box' padding={"0px 6px"} height={"50px"} justifyContent={"space-between"} alignItems={"center"}>
                <Box>
                    <Flex fontSize={"20px"} lineHeight={"27px"} width={"200px"} border={"2px solid transprent"} justifyContent={"space-between"}>
                        <Text>1</Text>
                        <Text>Consulation</Text>
                    </Flex>
                </Box>
                <Box>
                    <Flex fontSize={"20px"} lineHeight={"27px"} width={"250px"} border={"2px solid transprent"} justifyContent={"space-between"}>
                        <Text>500</Text>
                        <Text>1</Text>
                        <Text>500</Text>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    </Box>

    <Box textAlign={"left"} border={"2px solid transprent"} width={"695px"} height={"50px"}>
        <Box>
            <Flex textAlign={"left"} boxSizing='border-box' padding={"0px 6px"} height={"50px"} justifyContent={"space-between"} alignItems={"center"}>
                <Box>
                    <Flex textAlign={"left"} fontSize={"20px"} lineHeight={"27px"} width={"200px"} border={"2px solid transprent"} justifyContent={"space-between"}>
                        <Text>2</Text>
                        <Text textAlign={"left"}>X-ray</Text>
                    </Flex>
                </Box>
                <Box>
                    <Flex fontSize={"20px"} lineHeight={"27px"} width={"250px"} border={"2px solid transprent"} justifyContent={"space-between"}>
                        <Text>1500</Text>
                        <Text>2</Text>
                        <Text>3000</Text>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    </Box>


   <Box boxSizing='border-box' padding={"8px"} bgColor={"#F3F3F3"} borderBottomRadius={"24px"}  position={"absolute"} bottom={0} border={"2px solid transprent"} width={"695px"} height={"143px"}>
        <Flex fontSize={"18px"} boxSizing='border-box' padding={"0px 30px"} justifyContent={"space-between"}>
            <Text>Mobile Number</Text>
            <Text>8644567345</Text>
        </Flex>
        <Flex fontSize={"18px"} boxSizing='border-box' padding={"0px 30px"} justifyContent={"space-between"}>
            <Text>Tax</Text>
            <Text>200</Text>
        </Flex>
        <Flex fontSize={"18px"} boxSizing='border-box' padding={"0px 30px"} justifyContent={"space-between"}>
            <Text>Discount</Text>
            <Text>50</Text>
        </Flex>

        <hr style={{border:"1px solid lightgray"}} />

        <Flex  fontSize={"21px"} fontWeight={700} mt={"10px"} boxSizing='border-box' padding={"0px 30px"} justifyContent={"space-between"}>
            <Text>Totle</Text>
            <Text>3500</Text>
        </Flex>

   </Box>



 </Box>




        </Box>
    </>
  )
}

export default BilllingCard