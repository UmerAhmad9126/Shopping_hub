import { Box, Button, Card, CardBody, CardFooter, Heading, Stack, Image, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useState } from 'react'
import { CartContext } from '../Contexts/CartContextProvider';

const CartComponent = ({ image, title, id, Price, sendCount, handleDeleteData }) => {

    const [count, setCount] = useState(1);
    const {hnadleCartCount } = useContext(CartContext);

    return (
        <Box >
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                padding={"20px"}
            >
                <Image
                    w="100%"
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={image}
                    alt='img'
                />



                <Stack>
                    <CardBody>

                        <Heading size='sm'>$ {Price}</Heading>
                        <Text color={"blue"}>{title}</Text>
                    </CardBody>


                    <CardFooter>
                        <Button disabled={count === 1} onClick={() => [setCount(count - 1), sendCount(count - 1)]} variant='solid' colorScheme='blue'>-</Button>
                        <Button variant='outline' colorScheme="black">{count}</Button>
                        <Button disabled={count === 5} onClick={() => [setCount(count + 1), sendCount(count + 1)]} variant='solid' colorScheme='blue'>+</Button>
                    </CardFooter>
                    <Button colorScheme={"red"} onClick={() => [handleDeleteData(id), hnadleCartCount(-1)]}>Remove</Button>
                </Stack>

            </Card>
        </Box>
    )
}

export default CartComponent