import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Badge } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import Header from "./Header";

function HelpMe() {
  return (
    <>
      <Header />
      <Heading color="white" fontSize="40px">
        <Text>Soporte</Text>
      </Heading>
      <Container centerContent>
        <p>aaaaaaa</p>
      </Container>
      <Badge ml="1" fontSize="0.8em" colorScheme="green">
        New
      </Badge>
      <Badge colorScheme="green">Success</Badge>
    </>
  );
}

export default HelpMe;
