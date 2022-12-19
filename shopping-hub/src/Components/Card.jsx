import { Badge, Box, Button, Image, } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"
import "../Styles/Card.css"
import { useContext, useEffect } from "react"
import { CartContext } from "../Contexts/CartContextProvider"
import { useState } from "react"




export function Card({ image, title, rating, reviews, Price, id }) {

    const { hnadleCartCount } = useContext(CartContext);
    const [cartData, setCartData] = useState({});


    useEffect(() => {
        getData(id)
    }, [id]);


    const getData = async (id) => {
        try {

            let data = await fetch(`http://localhost:3000/video-game-and-vr/${id}`);
            let res = await data.json();
            // console.log('res:', res);
            setCartData(res);

        } catch (error) {
            console.log('error:', error)
        }
    }



    const handleAddtoCart = async () => {
        try {
            let res = await fetch(` http://localhost:3000/cart-server`, {
                method: 'POST',
                body: JSON.stringify(cartData),
                headers: {
                    "Content-Type": "application/json",
                }
            });

        } catch (error) {
            console.log('error:', error)
        }
    }


    return (

        <Box className="boxShadow" maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image margin={"auto"} src={image} alt={title} />

            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                        New
                    </Badge>
                </Box>

                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                >
                    {title}
                </Box>

                <Box mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}>
                    ${Price}
                </Box>

                <Box display='flex' mt='2' alignItems='center'>
                    {Array(5)
                        .fill('')
                        .map((_, i) => (
                            <StarIcon
                                key={i}
                                color={i < rating ? 'teal.500' : 'gray.300'}
                            />
                        ))}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                        {reviews} reviews
                    </Box>
                </Box>
                <Box padding={"1rem"} w="100%" >
                    <Button onClick={() => [hnadleCartCount(1), handleAddtoCart()]} colorScheme={"blue"} color="#fff" padding={"1rem"} w="100%">ADD TO CART</Button>
                </Box>

            </Box>
        </Box>
    )
}