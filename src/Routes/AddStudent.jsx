// TODO: answer here
import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";
import { useState } from "react";
import { Center, Card, CardHeader, CardBody, Box, Heading, Input, Select, Button } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import Footer from "../components/Footer";

const AddStudent = () => {
    // TODO: answer here
    
    const Form = (props) => {
        // TODO: answer here
        const navigate = useNavigate();
        const [fullname, setFullname] = useState();
        const [birthdate, setBirthdate] = useState();
        const [gender, setGender] = useState("Male");
        const [prody, setPrody] = useState("Ekonomi");
        const [profilePicture, setProfilePicture] = useState();
        const [address, setAddress] = useState();
        const [phoneNumber, setPhoneNumber] = useState();
        const fe = ["Ekonomi", "Manajemen", "Akuntansi"]
        const fisip = ["Administrasi Publik", "Administrasi Bisnis", "Hubungan Internasional"]
        const ft = ["Teknik Sipil","Arsitektur"]
        const ftis = ["Matematika", "Fisika", "Informatika"]

        const prodyChecker = (value) => {
            if (fe.includes(value)) {
                return "Fakultas Ekonomi"
            } else if (fisip.includes(value)) {
                return "Fakultas Ilmu Sosial dan Politik"
            } else if (ft.includes(value)){
                return "Fakultas Teknik"
            } else if (ftis.includes(value)){
                return "Fakultas Teknologi Informasi dan Sains"
            }
        }

        const handleSubmit = async(e) => {
        
        try {
            e.preventDefault();
            const student = {
                fullname : fullname,
                profilePicture : profilePicture,
                birthDate : birthdate,
                gender : gender,
                phoneNumber : phoneNumber,
                address : address,
                faculty : prodyChecker(prody),
                programStudy : prody
            }

            await fetch(`http://localhost:3001/student`,{
                method: "POST", // HTTP method menggunakan POST
                headers: {
                    // HTTP headers
                    "Content-Type": "application/json", // type data yang di kirim
                    },
                body: JSON.stringify(student),
            })

            navigate("/student");

            } catch (error) {
                console.log(error);
            }
        }

        // async function addStudent(student) {
        //    
        // }
        
        return (
            <form onSubmit={e => {
                    handleSubmit(e)
                    }} id="form-student">
                <FormControl>
                    <FormLabel htmlFor="input-name">Fullname</FormLabel>
                    <Input value={fullname} onChange={(e)=>setFullname(e.currentTarget.value)} required type='text' id="input-name" data-testId="name"/>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="profile-picture">Profile Picture</FormLabel>
                    <Input value={profilePicture} onChange={(e)=>setProfilePicture(e.currentTarget.value)} required type='text' id="profile-picture" data-testid="profilePicture"/>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="address">Address</FormLabel>
                    <Input value={address} onChange={(e)=>setAddress(e.currentTarget.value)} required type='text' id="address" data-testid="address"/>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
                    <Input value={phoneNumber} onChange={(e)=>setPhoneNumber(e.currentTarget.value)} required type='text' id="phoneNumber" data-testid="phoneNumber"/>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="input-date">Birth Date</FormLabel>
                    <Input value={birthdate} onChange={(e)=>setBirthdate(e.currentTarget.value)} required type='date' id="input-date" data-testid="date"/>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="input-gender">Gender</FormLabel>
                    <Select id="input-gender" data-testid="gender" value={gender} onChange={(e)=> {setGender(e.currentTarget.value)}} 
                    maxW={'sm'}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="input-prody">Program Study</FormLabel>
                    <Select id="input-prody" data-testid="prody" value={prody} onChange={(e)=>setPrody(e.currentTarget.value)} 
                    maxW={'sm'}>
                        <option value="Ekonomi">Ekonomi</option>
                        <option value="Manajemen">Manajemen</option>
                        <option value="Akuntansi">Akuntansi</option>
                        <option value="Administrasi Publik">Administrasi Publik</option>
                        <option value="Administrasi Bisnis">Administrasi Bisnis</option>
                        <option value="Hubungan Internasional">Hubungan Internasional</option>
                        <option value="Teknik Sipil">Teknik Sipil</option>
                        <option value="Arsitektur">Arsitektur</option>
                        <option value="Matematika">Matematika</option>
                        <option value="Fisika">Fisika</option>
                        <option value="Informatika">Informatika</option>
                    </Select>
                </FormControl>
                <Button mt={4} type="submit" value="Add Student" id="add-btn" data-testid="add-btn">Submit</Button>
            </form>
        );
    };

        return (
            <>
                <NavBar/>
                <Box mt={8} mb={8}>
                    {/* TODO: answer here */}
                    <Center>
                        <Card mb={8} minWidth={500}>
                            <CardHeader>
                                <Heading size='md' as='h1'>Add Student</Heading>
                            </CardHeader>
                            <CardBody>
                                <Form/>
                            </CardBody>
                        </Card>    
                    </Center>
                </Box>
                <Footer></Footer>
            </>
        );
    };

export default AddStudent;
