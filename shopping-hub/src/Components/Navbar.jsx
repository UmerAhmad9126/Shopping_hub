import { Box, Flex, HStack, IconButton, useDisclosure, useColorModeValue, Stack, Image, Text } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import SearchBox, { ResSearchBox } from './SearchBox';
import DrawerComponent from './DrawerComponent';
import { BsCartCheck } from 'react-icons/bs';
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg={useColorModeValue('#0046be', '#0046be')} px={4} color="white" position={"sticky"} top="0px">
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                        color="#0046be"
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <RouterLink to="/">
                            <Box><Image borderRadius={"5px"} width={"200px"} height={"50px"} src="data:image/jpeg;base64,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" alt={"Logo"} /></Box>
                        </RouterLink>
                        <HStack
                            as={'nav'}
                            spacing={20}
                            display={{ base: 'none', md: 'flex' }}>
                            <DrawerComponent />
                            <SearchBox />

                        </HStack>
                    </HStack>


                    <Flex alignItems={'center'}>
                        <Text marginRight={"50px"} fontWeight="600" fontSize="20px">Aiea</Text>
                        <BsCartCheck size={"30px"} />
                        <Text fontWeight="600" fontSize="20px" marginRight={"50px"} >Cart</Text>

                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            <ResSearchBox w="300px" />
                            <DrawerComponent />
                        </Stack>
                    </Box>
                ) : null}
            </Box>

        </>
    );
}