import { Button, Drawer, Text, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure, Divider } from "@chakra-ui/react"
import React from "react"
import { Link as RouterLink } from "react-router-dom"

export default function DrawerComponent() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Text ref={btnRef} onClick={onOpen} cursor="pointer" fontWeight="500" fontSize="20px">
                Menu
            </Text>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Shop By Department</DrawerHeader>
                    <DrawerBody>
                        <Divider />
                        <RouterLink to="/laptopandcomputer">
                            <Text onClick={onClose} padding="10px" color="#0046be">Laptop & Computers</Text>
                        </RouterLink>
                        <Divider />
                        <RouterLink to="/tvsandprojector">
                            <Text onClick={onClose} padding="10px" color="#0046be">Tvs & Projector</Text>
                        </RouterLink>
                        <Divider />
                        <Text padding="10px" color="#0046be">Apple</Text>
                        <Divider />
                        <RouterLink to="/videogame">
                            <Text onClick={onClose} padding="10px" color="#0046be">Videos Games, Consoles & VR</Text>
                        </RouterLink>
                        <Divider />
                        <Text padding="10px" color="#0046be">Headphones</Text>
                        <Divider />
                        <Text padding="10px" color="#0046be">PC Gaming</Text>
                        <Divider />
                        <Text padding="10px" color="#0046be">Tablets & E-Readers</Text>
                        <Divider />
                        <Text padding="10px" color="#0046be">Sound Bars, Speakers & Streaming Devices</Text>
                        <Divider />
                        <Text padding="10px" color="#0046be">Printers, Home Office & Computer Accessories</Text>
                        <Divider />
                        <Text padding="10px" color="#0046be">Smart Home, Security & Wi-Fi</Text>
                        <Divider />
                        <Text padding="10px" color="#0046be">Toys, Games, Collectibles & Movies</Text>
                        <Divider />
                        <Text padding="10px" color="#0046be">Health, Fitness & Personal Care</Text>
                        <Divider />
                        <Text padding="10px" color="#0046be">Small Appliances, Floor Care & Home Air Quality</Text>
                        <Divider />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}