import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import React from "react";

const Hero = () => {
  return (
    <Container maxW='1300px' display='flex' height="100vh" alignItems="center" >
      <Stack height="350px" justify="space-around">
        <Heading as="h1" fontSize="6xl">Get Crypto Related Knowledge</Heading>
        <Text as="p" maxW="80%" fontSize="lg">Here you get best knowledge about Crypto 
          so here we gave you best advice about crypto 
          so don't waste your time and get started
        </Text>
        <Box><Button colorScheme="orange">Check Post</Button></Box>
      </Stack>
      <Flex>
      <Image mr="4" src="/images/btc.svg" alt="" />
      </Flex>
    </Container>
  );
};

export default Hero;
