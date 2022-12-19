import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from '../Components/Card';
import Loading from '../Components/Loading';
import Pagination from '../Components/Pagination';

const getData = (page = 1) => {
    return fetch(` http://localhost:3000/video-game-and-vr?_page=${page}&_limit=12`)
        .then((res) => res.json())
}

const VideoGame = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);


    useEffect(() => {
        handleGetData()
    }, [page]);


    const handleGetData = async () => {
        setLoading(true);
        try {

            let data = await getData(page);
            // console.log('data:', data);
            setData(data);
            setLoading(false);

        } catch (error) {
            console.log('error:', error)
            setLoading(false);

        }
    }

    const handlePageChange = (changeBy) => {
        setPage(page + changeBy)
    }

    // console.log('data:', data)
    if (loading) {
        return <Loading />
    }

    return (
        <div>
            <SimpleGrid marginTop={"20px"} width="100%" columns={{ base: 1, sm: 2, md: 2, lg: 3, xl: 3, "2xl": 3 }} spacing={9} >
                {data.map((el) => {

                    return <div key={el.id}>
                        <Box>
                            <Card image={el.image} title={el.title} rating={el.rating} reviews={el.reviews} Price={el.Price} id={el.id} />
                        </Box>
                    </div>
                })}

            </SimpleGrid>

            <Pagination page={page} handlePageChange={handlePageChange} total={7} />
        </div>
    )
}

export default VideoGame;