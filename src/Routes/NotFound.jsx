import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Center, Button, Heading } from "@chakra-ui/react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
const NotFound = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <>
      <NavBar></NavBar>
      <Box mb={8}>
        <Center mt={8} maxH={'110%'}>
        <Box display= {'flex'}
        flexDirection={'column'}
        alignItems= {'center'}
        justifyContent= {'center'}
        textAlign= {'center'}>
          <Heading >404 | Not Found</Heading >
          <Button data-testid="back" onClick={handleBack} mt={4}>
            Take Me Back
          </Button>
        </Box>
      </Center>
      </Box>
      <Footer/>
    </>
    
  );
};

export default NotFound;
