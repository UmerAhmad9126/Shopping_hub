import { Heading, SimpleGrid, Button, Box, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, ModalBody, } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useEffect } from 'react';
import "../App.css"
import CartComponent from '../Components/CartComponent';
import { Link as RouterLink } from "react-router-dom"
import Loading from '../Components/Loading';


const deleteData = (id) => {

  return fetch(`http://localhost:3000/cart-server/${id}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then((res) => res.json())

}

const CartPage = () => {

  const [data, setData] = useState([]);
  const [val, setVal] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData()
  }, []);


  const getData = async () => {
    setLoading(true)
    try {
      let res = await fetch(`http://localhost:3000/cart-server`);
      let data = await res.json();
      console.log('data:', data);
      setData(data);
      setLoading(false);

    } catch (error) {
      console.log('error:', error);
      setLoading(false);

    }
  };

  const handleDeleteData = (id) => {
    setLoading(true);

    deleteData(id)
      .then((res) => {
        getData();
        setLoading(false);

      })
      .catch((err) => {
        console.log('err:', err);
        setLoading(false);

      })
  }




  const sendCount = (val) => {
    setVal(val)
  };

  let arr = [];

  data.map((el) => (
    arr.push(+el.Price)
  ))

  // console.log('arr:', arr)
  const initialValue = 0;
  const totalSum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  if (loading) {
    return <Loading />
  }

  return (
    <Box >
      <SimpleGrid margin={"auto"} w="85%" columns={{ base: 1, sm: 1, md: 1, lg: 2, xl: 2, "2xl": 2 }} spacing={3}>
        {data.map((el) => (
          <Box key={el.id}>
            <CartComponent image={el.image} Price={el.Price} title={el.title} id={el.id} sendCount={sendCount} handleDeleteData={handleDeleteData} />
          </Box>
        ))}
      </SimpleGrid>
      <Box w="50%" margin="auto" height={"auto"} padding="30px" >
        <Box marginTop={"40px"}>
          <Heading color={"blue"} size={"xl"} textAlign="center">Total Price: $ {Math.floor(totalSum * val)} </Heading>
        </Box >
        <hr />
        <br />
        <Box>
          {/* <Button  color={"#fff"} colorScheme={"blue"} margin={"auto"} padding={"10px"} width={"100%"}>Place Order</Button> */}
          <Button onClick={onOpen} color={"#fff"} colorScheme={"blue"} margin={"auto"} padding={"10px"} width={"100%"} >Place Order</Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Order Placed Succesfully</ModalHeader>
              <ModalCloseButton />
              <ModalBody fontSize="xl" color={"blue"}>
                Thank You For Shopping!
              </ModalBody>

              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                  Close
                </Button>
                <RouterLink to={"/videogame"}>
                  <Button variant='ghost'>Buy More</Button>
                </RouterLink>
              </ModalFooter>
            </ModalContent>
          </Modal>

        </Box>
      </Box>
    </Box>


  );
}

export default CartPage