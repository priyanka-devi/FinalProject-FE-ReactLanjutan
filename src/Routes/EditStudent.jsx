import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";
import { Card, CardBody, CardFooter, Center, Box, Stack, Divider, ButtonGroup, Button, Input } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  Select,
} from '@chakra-ui/react'
import Footer from "../components/Footer";

const EditStudent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState({
        fullname: "",
        profilePicture: "",
        address: "",
        phoneNumber: "",
        birthDate: "",
        gender: "",
        programStudy: "",
        faculty: "",
    });
    const [loading, setLoading] = useState(true);
    const fe = ["Ekonomi", "Manajemen", "Akuntansi"];
    const fisip = ["Administrasi Publik", "Administrasi Bisnis", "Hubungan Internasional"];
    const ft = ["Teknik Sipil","Arsitektur"];
    const ftis = ["Matematika", "Fisika", "Informatika"];

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

  useEffect(() => {
    fetch(`http://localhost:3001/student/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setStudent(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:3001/student/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });
      navigate("/student")
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleFaculty = (e) => {
    const prodyNih = e.target.value
    const faculty = prodyChecker(prodyNih);
    setStudent({...student, programStudy: prodyNih, faculty: faculty});
  }

  if (loading) {
    return (
      <>
        <NavBar/>
        <Center mb={8} mt={8}>Loading ...</Center>
        <Footer></Footer>
      </>
    )
    
  }

  return (
    <>
      <NavBar/>
      <Box>
    
        <Center>
          <Card size={'lg'} mb={8} mt={8} minWidth={500}>
          <form onSubmit={handleSubmit}>
            <CardBody>
              <Center>
                <img
                src={student.profilePicture} 
                alt="Profile" 
                data-testid="profilePicture"
                borderRadius='lg'
                />
              </Center>
              <Stack mt='6' spacing='3'>
                  <Box>
                    <FormControl>
                      <FormLabel htmlFor="fullname">
                        Fullname
                      </FormLabel>
                      <Input
                      type="text"
                      id="fullname"
                      value={student.fullname}
                      onChange={(e) => setStudent({...student, fullname: e.target.value})}
                      data-testid="name"/>
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor="address">Address
                      </FormLabel>
                      <Input
                      type="text"
                      id="address"
                      name="address"
                      value={student.address}
                      onChange={(e) => setStudent({...student, address: e.target.value})}
                      data-testid="address"/>
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor="phoneNumber">Phone Number
                      </FormLabel>
                      <Input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={student.phoneNumber}
                      data-testid="phoneNumber"
                      onChange={(e) => setStudent({...student, phoneNumber: e.target.value})}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor="birthDate">Birth Date
                      </FormLabel>
                      <Input
                      value={student.birthDate} 
                      onChange={(e) => setStudent({...student, birthDate: e.target.value})} 
                      required type="date" 
                      id="birthDate" 
                      data-testid="date"/>
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor="gender">Gender
                      </FormLabel>
                      <Select
                      id="gender"
                      value={student.gender}
                      onChange={(e) => setStudent({...student, gender: e.target.value})}
                      data-testid="gender"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </Select>
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor="programStudy">Program Study
                      </FormLabel>
                      <Select
                      id="programStudy" 
                      data-testid="prody" 
                      value={student.programStudy} 
                      onChange={handleFaculty}
                      >
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
                  </Box>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue' type="submit" data-testid="edit-btn">
                  Edit Student
                </Button>
              </ButtonGroup>
            </CardFooter>
          </form>
          </Card>
        </Center>
      </Box>
      <Footer></Footer>
    </>
    
  );
};

export default EditStudent;
