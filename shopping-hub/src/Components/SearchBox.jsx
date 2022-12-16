import { Input, InputGroup, InputRightElement, Stack } from '@chakra-ui/react'
import React from 'react'
import { FiSearch } from 'react-icons/fi';

const SearchBox = () => {
    return (
        <div>
            <Stack spacing={2} align="center">
                <InputGroup bg={"white"} w="500px" borderRadius={"5px"}>
                    <InputRightElement
                        pointerEvents='none'
                        children={<FiSearch color='blue' />}
                    />
                    <Input type='text' placeholder='Search Best Buy' color={"gray"} />
                </InputGroup>
            </Stack>
        </div>
    )
}

export default SearchBox


export const ResSearchBox = () => {
    return (
        <div>
            <Stack spacing={2} align="center">
                <InputGroup bg={"white"} w="300px" borderRadius={"5px"}>
                    <InputRightElement
                        pointerEvents='none'
                        children={<FiSearch color='blue' />}
                    />
                    <Input type='text' placeholder='Search Best Buy' color={"gray"} />
                </InputGroup>
            </Stack>
        </div>
    )
}
