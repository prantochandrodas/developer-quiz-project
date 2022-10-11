import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
function Header() {
    return (
        <Navbar className='bgNav' expand="lg">
            <Container>
                <Navbar.Brand href="#home"><h2>Developer-Quiz</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <div className='styleLink'>
                        <NavLink className={({isActive})=>isActive ? 'active' : 'notActive'} to={'/home'}>Home</NavLink>
                         
                            <NavLink to={'/statistics'}>Statistics</NavLink>

                            <NavLink to={'/blog'}>Blog</NavLink>
                        </div>
                      
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;