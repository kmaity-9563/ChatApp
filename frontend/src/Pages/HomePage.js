import { Box, Container, Text } from "@chakra-ui/react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import React from "react";
import Signup from "../components/Authentication/signup";
import Login from "../components/Authentication/Login";

export const HomePage = () => {
  return (
    <Container>
      <Box
        fontWeight="bold"
        //  d = "flex"
        textAlign="center"
        m="40px 0 15px 120px"
        //  justifyContent='center'
        p="3"
        color="#5467"
        width="50%"
      >
        <Text fontSize="5xl"> web chat </Text>
      </Box>
      <Box color="black">
        <Tabs variant="soft-rounded" colorScheme="twitter">
          <TabList mb="1em">
            <Tab width="50%">log in</Tab>
            <Tab width="50%">Sign up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};
