// TODO: answer here

import { Box, Stack, ButtonGroup, Text, Heading} from "@chakra-ui/react";
// import {FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa'
import "../Styles/main.css"

const Footer = () => {
    return (
        // TODO: answer here
        <footer className="footer">
            <Box as="footer" role="contentinfo" py={{ base: '12', md: '16', lg: '20'}} className="footer" bg={'#29335c'}>
                <Stack spacing={{ base: '4', md: '5', lg: '6' }} ml={8} mr={8  }>
                    <Stack justify="space-between" direction="row" align="center" aria-colspan={2}>
                        <Heading fontSize={'3xl'} color={"blue.100"}>Studi Independen Ruangguru</Heading>
                        <ButtonGroup variant="tertiary" color={"white"}>
                        {/* <IconButton
                            as="a"
                            href="https://www.linkedin.com/in/priyankadevii/"
                            aria-label="LinkedIn"
                            icon={<FaLinkedin fontSize="1.25rem" />}
                        /> */}
                        {/* <IconButton as="a" href="https://github.com/priyanka-devi" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} /> */}
                        </ButtonGroup>
                    </Stack>
                    <Text fontSize="sm" color="white">
                        <p className="studentName">Priyanka Devi  
                        </p>
                        <p className="studentId">FE4529989</p>
                    </Text>
                </Stack>
            </Box>
        </footer>
            );
};

export default Footer;
