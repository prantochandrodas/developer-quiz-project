import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Header.css';
function Header() {
    return (
        <Navbar className='bgNav' expand="lg">
            <Container>
                <Navbar.Brand href="#home">Developer-Quiz</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <div className='styleLink'>
                            
                            <Link className='' to={'/'}>Home</Link>
                            <Link to={'/statistics'}>Statistics</Link>

                            <Link to={'/blog'}>Blog</Link>
                        </div>
                      
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;