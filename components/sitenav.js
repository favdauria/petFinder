import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { router } from "next/router";



const SiteNav = () => {
    return(
      <Navbar className="nav">
        <Container className='d-flex justify-content-between'>
          <Navbar.Brand class = "appName" href="#" onClick={() => {router.push('/')}}>Adoptame.UY</Navbar.Brand>
          
          <Nav style={{marginRight: 0}}>
            <Nav.Link href="#home" onClick={() => {router.push('/login')}}>Acceder</Nav.Link>
            <Nav.Link onClick={() => {router.push('/register')}}>Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
export default SiteNav;