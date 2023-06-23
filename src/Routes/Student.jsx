import { Box, Table, Thead, Tbody, Tr, Th, TableCaption,Td, Select, Button, Center, Link, Heading, Tfoot, TableContainer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import React from "react";
import Footer from "../components/Footer";

const Student = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFakultas, setSelectedFakultas] = useState("All");

  const handleChangeFakultas = (event) => {
    setSelectedFakultas(event.target.value);
  };

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:3001/student");
    const data = await response.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    void (async () => {
      await fetchData();
    })();
  }, []);

  const TableComponent = (props) => {
    const filteredFakultas = () => {
      if (selectedFakultas === "All") {
        return props.students;
      } else {
        return props.students.filter((student) => student.faculty === selectedFakultas);
      }
    };

    

    const dataRows = filteredFakultas().map((student) => (
      <Tr key={student.id} className="student-data-row">
        <Td>{student.id}</Td>
        <Td>
        <Link href={`/student/${student.id}`}>
            {student.fullname}
        </Link>
        
        </Td>
        <Td>{student.birthDate}</Td>
        <Td>{student.gender}</Td>
        <Td>{student.faculty}</Td>
        <Td>{student.programStudy}</Td>
        <Td>
          <Button
            colorScheme="red"
            className="btn delete-button"
            data-testid={`delete-${student.id}`}
            bg={'red.400'}
            rounded={'full'}
            px={6}
            onClick={(e) => {
              handleDelete(student.id);
            }}
            _hover={{
                bg: 'red.500'}}
          >
            Delete
          </Button>
        </Td>
      </Tr>
    ));

    const handleDelete = async (id) => {
      try {
        await fetch(`http://localhost:3001/student/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        await props.fetchData();
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <Box>
        <Center>
            <Select data-testid="filter" value={selectedFakultas} onChange={handleChangeFakultas} maxW={'sm'}>
                <option value="All">All</option>
                <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
                <option value="Fakultas Ilmu Sosial dan Politik">Fakultas Ilmu Sosial dan Politik</option>
                <option value="Fakultas Teknik">Fakultas Teknik</option>
                <option value="Fakultas Teknologi Informasi dan Sains">Fakultas Teknologi Informasi dan Sains</option>
            </Select>
        </Center>
        <TableContainer>
          <Table id="table-student" itemID="table-student">
            <TableCaption>Data All Students</TableCaption>
            <Thead>
              <Tr>
                <Th name="No">No</Th>
                <Th name="Full Name">Full Name</Th>
                <Th name="Birth Date">Birth Date</Th>
                <Th name="Gender">Gender</Th>
                <Th name="Faculty">Faculty</Th>
                <Th name="Program Study">Program Study</Th>
                <Th name="Option">Option</Th>
              </Tr>
            </Thead>
            <Tbody id="student-data">{dataRows}</Tbody>
            <Tfoot>
              <Tr>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td>By : </Td>
                <Td>Priyanka Devi</Td>
                <Td></Td>
                <Td></Td>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
        
      </Box>
    );
  };

  return (
    <>
      <NavBar />
      <Box mt="8" mb={8}>
        <Box>
          <Center mb={'8'}>
            <Heading fontSize={'2xl'}>All Student</Heading>
          </Center>
          {loading ? <Center><p>Loading ...</p></Center> : <TableComponent fetchData={fetchData} students={data} />}
        </Box>
      </Box>
      <Footer/>
    </>
  );
};

export default Student;
