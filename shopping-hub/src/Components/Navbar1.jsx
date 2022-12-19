import { ChevronDownIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Flex,
    HStack,
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Stack,
    useColorModeValue,
    useDisclosure,
    Text,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';


const Links = ['Top Deals', 'Deals of the Day', 'Total Tech Membership', 'Credit Cards', 'Recently viewed', 'Saved items'];


const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'underline',
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function Navbar1() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <hr />
            <Box bg={useColorModeValue('#0046be', '#0046be')} px={4}>
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
                        <Menu>
                            <MenuButton color={"#fff"} colorScheme={"#0046be"} as={Button} rightIcon={<ChevronDownIcon />}>
                                Holiday Deals
                            </MenuButton>
                            <MenuList>
                                <MenuDivider />
                                <MenuItem color={"#0046be"}>Holiday Deals Right Now</MenuItem>
                                <MenuDivider />
                                <MenuItem color={"#0046be"}>Gift Ideas</MenuItem>
                                <MenuDivider />
                                <MenuItem color={"#0046be"}>Gift Cards</MenuItem>
                                <MenuDivider />
                                <MenuItem color={"#0046be"}>Toy Guide 2022</MenuItem>
                                <MenuDivider />
                                <MenuItem color={"#0046be"}>Explore Holiday Inspiration</MenuItem>
                                <MenuDivider />
                                <MenuItem color={"#0046be"}>Holiday FAQs</MenuItem>
                                <MenuDivider />
                            </MenuList>
                        </Menu>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: "none", md: 'flex' }}
                            color="#fff">
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                        <Menu>
                            <MenuButton color={"#fff"} colorScheme={"#0046be"} as={Button} rightIcon={<ChevronDownIcon />}>
                                More
                            </MenuButton>
                            <MenuList>
                                <MenuDivider />
                                <MenuItem color={"#0046be"}>Totaltech MemberShip</MenuItem>
                                <MenuDivider />
                                <MenuItem color={"#0046be"}>Credit Cards</MenuItem>
                                <MenuDivider />
                                <MenuItem color={"#0046be"}>Gift Cards</MenuItem>
                                <MenuDivider />
                                <MenuItem color={"#0046be"}>Health & Wellness</MenuItem>
                                <MenuDivider />
                                <MenuItem color={"#0046be"}>Best Buy Outlet</MenuItem>
                                <MenuDivider />
                                <MenuItem color={"#0046be"}>Best Buy Business</MenuItem>
                                <MenuDivider />
                            </MenuList>
                        </Menu>

                        <Menu>
                            <MenuButton  color={"#fff"} colorScheme={"#0046be"} as={Button} rightIcon={<ChevronDownIcon />}>
                                Accounts
                            </MenuButton>
                            <MenuList>
                                <MenuDivider />
                                <Text width={"340px"}>Becoming a My Best Buy® member comes with
                                    easy order tracking, rewards, offers and more.</Text>
                                <MenuDivider />
                                <RouterLink to="/login">
                                    <Button onClick={onClose} w={"340px"} colorScheme={'blue'} variant={'solid'}>Sign In</Button>
                                </RouterLink>
                                <MenuDivider />
                                <Button variant={"outline"} w="340px" colorScheme={"#fff"} color="#0046be">Create Account</Button>
                                <MenuDivider />
                                <MenuItem color={"#0046be"}>Account</MenuItem>
                                <MenuDivider />
                                <MenuItem color={"#0046be"}>Order And Purchase</MenuItem>
                                <MenuDivider />
                                <MenuItem color={"#0046be"}>Your Products</MenuItem>
                                <MenuDivider />
                                <MenuDivider />
                                <MenuItem color={"#0046be"}>Payment Method</MenuItem>
                                <MenuDivider />
                                <MenuItem color={"#0046be"}>Protection Plans & Subscriptions</MenuItem>
                                <MenuDivider />
                                <MenuItem color={"#0046be"}>Digital Library</MenuItem>
                            </MenuList>
                        </Menu>
                    </HStack>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4} color="#fff">
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}

            </Box>
            <hr />
        </>
    );
}
