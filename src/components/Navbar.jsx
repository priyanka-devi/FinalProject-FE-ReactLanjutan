// TODO: answer here
import { Link } from "react-router-dom";
import { Heading, Button } from "@chakra-ui/react";
// import {FaBars, FaTimes} from 'react-icons/fa'
import { useRef } from "react";
import "../Styles/main.css"

const NavBar = () => {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <nav ref={navRef} style={{zIndex: '7'}}>
                <Link to="/" data-testid="home-page">
                    <Heading fontSize={'2xl'}>Student Portal</Heading>
                </Link>
                {/* <Link href="/" data-testid="home-page">
                    Student Portal
                </Link> */}
                <Link to="/student" data-testid="student-page">
                    All Student
                </Link>
                <Link to="/add" data-testid="add-page">
                    Add Student
                </Link>
                <Button className='nav-btn nav-close-btn' onClick={showNavBar}>
                    {/* <FaTimes/> */}
                    X
                </Button>
            </nav>
            <Button className="nav-btn" onClick={showNavBar}>
                {/* <FaBars/> */}
                ≡
            </Button>
        </header>
        // TODO: answer her
    );
};

export default NavBar;
