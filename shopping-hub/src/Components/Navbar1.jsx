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
} from '@chakra-ui/react';


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
                            <MenuButton  color={"#fff"} background={"#0046be"} as={Button} rightIcon={<ChevronDownIcon />}>
                                Holiday Deals
                            </MenuButton>
                            <MenuList>
                                <MenuDivider />
                                <MenuItem>Holiday Deals Right Now</MenuItem>
                                <MenuDivider />
                                <MenuItem>Gift Ideas</MenuItem>
                                <MenuDivider />
                                <MenuItem>Gift Cards</MenuItem>
                                <MenuDivider />
                                <MenuItem>Toy Guide 2022</MenuItem>
                                <MenuDivider />
                                <MenuItem>Explore Holiday Inspiration</MenuItem>
                                <MenuDivider />
                                <MenuItem>Holiday FAQs</MenuItem>
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
                            <MenuButton  color={"#fff"} background={"#0046be"} as={Button} rightIcon={<ChevronDownIcon />}>
                                More
                            </MenuButton>
                            <MenuList>
                                <MenuDivider />
                                <MenuItem>Totaltech MemberShip</MenuItem>
                                <MenuDivider />
                                <MenuItem>Credit Cards</MenuItem>
                                <MenuDivider />
                                <MenuItem>Gift Cards</MenuItem>
                                <MenuDivider />
                                <MenuItem>Health & Wellness</MenuItem>
                                <MenuDivider />
                                <MenuItem>Best Buy Outlet</MenuItem>
                                <MenuDivider />
                                <MenuItem>Best Buy Business</MenuItem>
                                <MenuDivider />
                            </MenuList>
                        </Menu>

                        <Menu>
                            <MenuButton  color={"#fff"} background={"#0046be"} as={Button} rightIcon={<ChevronDownIcon />}>
                                Accounts
                            </MenuButton>
                            <MenuList>
                                <MenuDivider />
                                <MenuItem>Totaltech MemberShip</MenuItem>
                                <MenuDivider />
                                <MenuItem>Credit Cards</MenuItem>
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