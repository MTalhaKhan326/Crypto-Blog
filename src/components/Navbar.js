import { Box, Container, Flex , Text } from '@chakra-ui/react'
import {Image} from "@chakra-ui/image";
import {InputGroup , Input , InputLeftElement} from "@chakra-ui/input";
import {SearchIcon} from "@chakra-ui/icons";

import React from 'react'

const Navbar = () => {
  return (
    <Container 
    as="nav"
    maxW="1300px" 
    display="flex" 
    marginTop="3" 
    marginLeft='6'
    marginRight='6'
    padding='4'
    justifyContent="space-between"
    boxShadow="lg"
    borderRadius="lg"
    pos="sticky"
    top="0"
    zindex="50"
    bg="white">
      <Flex align="center">
        <Image width='50px' height='50px' marginRight="4" src="/images/btc.svg" alt="" />
        <Text mr="2">Home</Text>
      </Flex>

      <Flex align="center">
        <Text mr="2">POST</Text> 
        <Text mr="2">Trending</Text>
        <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon color='gray.300' />}
    />
    <Input 
     w='100px'
    type='tel' placeholder='Phone number' />
  </InputGroup>
      </Flex>
    </Container>)
}

export default Navbar