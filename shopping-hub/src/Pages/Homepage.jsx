import React from 'react'
import { Box, Text, Image, SimpleGrid, } from "@chakra-ui/react"
import Carousel from '../Components/Carousel'



let categoryArray = [
  {
    "image": "https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-616430-ghp-img-icons-laptop-c5da5447-1c71-4cdd-a943-1074efe82c21.jpg;maxWidth=220",
    "Title": "Laptops & Computers"
  },
  {
    "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502215_sd.jpg;maxWidth=220",
    "Title": "TVs & Projectors"
  },
  {
    "image": "https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-apple-d28633c9-bbe5-4f83-a0f6-55b738306ae1.jpg;maxWidth=220",
    "Title": "Apple"
  },
  {
    "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6456/6456332_sd.jpg;maxWidth=220",
    "Title": "Video Games, Consoles & VR"
  },
  {
    "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6519/6519950_sd.jpg;maxWidth=220",
    "Title": "Cell Phones"
  },
  {
    "image": "https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-606895-ghp-img-icons-mappls-2157cc1d-a86a-48d0-98a3-15110ca655c7.jpg;maxWidth=220",
    "Title": "Major Appliances"
  },
  {

    "image": "https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-603010-ghp-img-icons-headphones-e47a17c4-fa1c-44cd-9fcc-95dd55b90140.jpg;maxWidth=220",
    "Title": "Headphones"
  },
  {

    "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6500/6500695_rd.jpg;maxWidth=220",
    "Title": "PC Gaming"
  },
  {
    "image": "https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-615940-ghp-img-icons-tablets-cca4909d-0100-406b-88ba-28c1a482fc6a.jpg;maxWidth=220",
    "Title": "Tablets & E-Readers"
  },
  {
    "image": "https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-616430-ghp-img-icons-cameras-97e7107d-1e88-492b-ac33-7d339f14f303.jpg;maxWidth=220",
    "Title": "Cameras, Camcorders & Drones"
  },
  {
    "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6352/6352589_sd.jpg;maxWidth=220",
    "Title": "Sound Bars, Speakers & Streaming Devices"
  },
  {
    "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6510/6510885_sd.jpg;maxWidth=220",
    "Title": "Wearable Technology"
  },
  {
    "image": "https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-smappls-bfa220bd-fca3-447c-ab2e-3c88aaebea36.jpg;maxWidth=220",
    "Title": "Small Appliances, Floor Care & Home Air Quality"
  },
  {
    "image": "https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-615940-ghp-img-icons-printers-293d1aa1-6487-4489-8c17-f4bdc2f57b56.jpg;maxWidth=220",
    "Title": "Printers, Home Office & Computer Accessories"
  },
  {
    "image": "https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611306-ghp-img-icons-smarthome-4e123a01-61ee-490a-9f3d-0b6a1b048c3a.jpg;maxWidth=220",
    "Title": "Smart Home, Security & Wi-Fi"
  },
  {
    "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6467/6467309cv11d.jpg;maxWidth=220",
    "Title": "Toys, Games, Collectibles & Movies"
  },
  {
    "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6393/6393483_sd.jpg;maxWidth=220",
    "Title": "Electric Transportation"
  },
  {
    "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6474/6474522_sd.jpg;maxWidth=220",
    "Title": "Health, Fitness & Personal Care"
  }
]

let newArrivalArray = [
  {
    "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6494/6494230_sd.jpg;maxHeight=240;maxWidth=240",
    "desc": "Samsung - Galaxy Tab S8 Ultra - 14.6\" 256GB - Wi-Fi - with S-Pen - Graphite"
  },
  {
    "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6494/6494439_sd.jpg;maxHeight=240;maxWidth=240",
    "desc": "Samsung - Galaxy S22 Ultra 128GB (Unlocked) - Phantom Black"
  },
  {
    "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6510/6510869_sd.jpg;maxHeight=240;maxWidth=240",
    "desc": "Samsung - Galaxy Watch5 Aluminum Smartwatch 40mm BT - Graphite"
  },
  {
    "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6512/6512612_sd.jpg;maxHeight=240;maxWidth=240",
    "desc": "Samsung - Galaxy Z Flip4 128GB (Unlocked) - Bora Purple"
  },
]

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
              <Box border="3px solid #0457c8" borderRadius="100%">
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
            <Box key={item.Title} >
              <Box border="1px solid gray" borderRadius={"5px"}>
                <Image src={item.image} width="100%" height={"200px"} cursor={"pointer"} borderRadius={"5px"} />
                <Text textAlign={"center"} color="#0046be" cursor={"pointer"} padding="1rem" >{item.desc}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>


      <Box>
        <Text color={"#1d252c"} fontSize="18px" fontWeight={"bold"} padding={"1rem"}>Deals inspired by your shopping (6 items)</Text>
        <hr />
      </Box>


      <Box>
        {/* <Carousel /> */}
      </Box>






    </Box>
  )
}

export default Homepage