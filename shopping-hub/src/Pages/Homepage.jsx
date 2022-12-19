import React from 'react'
import { Box, Text, Image, SimpleGrid, } from "@chakra-ui/react"
import { categoryArray, newArrivalArray, } from "../Components/Data.js"
import Carousel1 from '../Components/Carousel'
import { carousel1Array } from '../Components/Data.js'

const Homepage = () => {

  return (
    <Box>

      <Box bg={"#ffe423"} w="100%" height={"auto"}>
        <Box w="60%" height={"200px"} margin={"auto"}>
          <Box bg={"blue"} w="120px" color={"#fff"}><Text fontSize="17px" fontWeight={"600"}>Ends Sunday.</Text></Box>
          <Box color={"#001e73"} width="100%"><Text fontSize="55px" fontWeight={"bold"}>48 Hour's</Text></Box>
          <Box color={"#001e73"} width="100%"><Text fontSize="70px" fontWeight={"bold"} marginTop="-25px">Flash Sale</Text></Box>
          <Text color={"#040c13"} fontSize="17px" fontWeight={"600"} marginTop="-25px">Save on this season's top gifts</Text>
        </Box>
        <Text marginLeft={"200px"} marginTop="50px" fontSize="17px" fontWeight={"600"}>Shop all holiday deals by category</Text>
      </Box>

      <Box bg="#e0e6ef">
        <SimpleGrid width="80%" margin={"auto"} columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5, "2xl": 5 }} spacing={6} >
          {categoryArray.map((item) => (
            <Box key={item.Title} >
              <Box key={item.Title} border="3px solid #0457c8" borderRadius="100%">
                <Image src={item.image} width="200px" height={"200px"} borderRadius="100%" cursor={"pointer"} />
              </Box>
              <Text textAlign={"center"} color="#0046be" textDecoration={"underline"} cursor={"pointer"} >{item.Title}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Box>
        <Text color={"#1d252c"} fontSize="18px" fontWeight={"bold"} padding={"1rem"}>New Arrival</Text>
        <hr />
      </Box>

      <Box marginTop={"50px"}>
        <SimpleGrid width="100%" columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 4, "2xl": 4 }} spacing={9} >
          {newArrivalArray.map((item) => (
            <Box key={item.desc} >
              <Box border="1px solid gray" borderRadius={"5px"}>
                <Image src={item.image} width="80%" height={"150px"} cursor={"pointer"} borderRadius={"5px"} margin="auto" />
                <Text textAlign={"center"} color="#0046be" cursor={"pointer"} padding="1rem" >{item.desc}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <hr />


      <Box marginTop={"40px"}>
        <hr />
        <Image w="309px" h="309px" src='https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-77281-subghp-20DoD-112922-1204b23d-5690-41e8-905e-3415c21249b6.jpg;maxHeight=960;maxWidth=960' alt='img-1' />
      </Box>

      <Box>
        <hr />
        <Text color={"#1d252c"} fontSize="18px" fontWeight={"bold"} padding={"1rem"}>Deals inspired by your shopping (6 items)</Text>
        <hr />
      </Box>

      <Box >
        <Carousel1 />
      </Box>

      {/* <Box>
        <hr />
        <Text color={"#1d252c"} fontSize="18px" fontWeight={"bold"} padding={"1rem"}>Our featured offers</Text>
        <hr />
      </Box>


      <Box width={"100%"} height="400px" border={"1px solid gray"} display="flex">
        <Box w="30%" h={"100%"} border="1px solid gray" margin={"auto"} cursor="pointer">
          <Image width={"100%"} h="70%" src='https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-619648-pol-ase-112022-4ac773ac-3d86-4242-9b79-92e237ec8366.jpg;maxHeight=504;maxWidth=740' />
          <Text fontSize={"3xl"} color="blue" padding={"8px"} textDecoration="underline">Apple Shopping Event.</Text>
          <Text padding={"6px"} color="blue">Save up to $400 on select MacBook models, plus more great deals.
            MacBook minimum savings is $150.</Text>
        </Box>
        <Box w="30%" h={"100%"} border="1px solid gray" margin={"auto"} cursor="pointer">
          <Image width={"100%"} h="60%" src='https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-625544-nintendo-games-pol-der-5e47421b-ce74-42f4-adaa-cecfca90c792.jpg;maxHeight=504;maxWidth=740' />
          <Text fontSize={"2xl"} color="blue" padding={"8px"} textDecoration="underline">Save $10–$20 on select Switch games.</Text>
          <Text padding={"6px"} color="blue">Choose from Nintendo Switch Sports, Donkey Kong Country: Tropical Freeze, New Super Mario Bros. U Deluxe and other titles.</Text>

        </Box>
        <Box w="30%" h={"100%"} border="1px solid gray" margin={"auto"} cursor="pointer">
          <Image width={"100%"} h="70%" src='https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-MMT-625332_der-0c5b6c27-cec9-4cba-9196-67b46aecb666.jpg;maxHeight=504;maxWidth=740' />
          <Text fontSize={"2xl"} color="blue" padding={"8px"} textDecoration="underline">Save up to $100 on select personal care.</Text>
          <Text padding={"4px"} color="blue">Minimum savings is $7.50.</Text>
        </Box>
      </Box> */}


      <Box>
        <Text color={"#1d252c"} fontSize="18px" fontWeight={"bold"} padding={"1rem"}>Featured products for you</Text>
        <hr />
      </Box>


      <Box marginTop={"30px"}>
        <SimpleGrid width="100%" columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 4, "2xl": 4 }} spacing={9} >
          {carousel1Array.map((item) => (
            <Box key={item.desc} >
              <Box border="1px solid gray" borderRadius={"5px"}>
                <Image src={item.image} width="80%" height={"150px"} cursor={"pointer"} borderRadius={"5px"} margin="auto" />
                <Text textAlign={"center"} color="#0046be" cursor={"pointer"} padding="1rem" >{item.desc}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>






    </Box>
  )
}

export default Homepage