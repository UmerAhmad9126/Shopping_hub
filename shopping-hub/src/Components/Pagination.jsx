import { Box, Button } from '@chakra-ui/react'
import React from 'react'

const Pagination = ({ page, handlePageChange, total }) => {
    return (
        <div>
            <Box width={"100%"} marginTop="40px">
                <Box width={"270px"} margin={"auto"}>
                    <Button disabled={page === 1} onClick={() => (handlePageChange(-1))} colorScheme={"blue"}>PREVIOUS</Button>
                    <Button colorScheme={"blue"} variant='outline' color={"blue"} disabled>{page}</Button>
                    <Button disabled={page === total} onClick={() => (handlePageChange(1))} colorScheme={"blue"}>NEXT</Button>
                </Box>
            </Box>
        </div>
    )
}

export default Pagination