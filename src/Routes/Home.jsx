// TODO: answer here
import { Link } from "react-router-dom";
import { Heading, Center, Container, Text } from "@chakra-ui/react";
import { Box, Button, Stack,} from '@chakra-ui/react';
import Footer from "../components/Footer";

const Home = () => {
    return (
      <>
        <Center className="home">
            <Container maxW={'3xl'}>
            <Stack
              as={Box}
              textAlign={'center'}
              spacing={{ base: 8, md: 14 }}
              py={{ base: 20, md: 36 }}>
              <Heading
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                lineHeight={'100%'} color={"teal"}>
                Studi Independen Kampus Merdeka <br />
                <Text as={'span'} color={'gray.500'} fontSize="md">
                  by RUANGGURU
                </Text>
              </Heading>
              <Text color={'gray.500'} >
                Student Portal
              </Text>
              <Stack
                direction={'column'}
                spacing={3}
                align={'center'}
                alignSelf={'center'}
                position={'relative'}>
                <Button 
                data-testId="student-btn"
                colorScheme={'teal'} 
                bg={'teal.400'}
                variant='solid'
                rounded={'full'}
                px={6}
                _hover={{
                    bg: 'teal.500'}}
                as={Link} to="/student"
                >
                    ADD STUDENT
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Center>
        <Footer></Footer>
      </>
    
    );
};

export default Home;
