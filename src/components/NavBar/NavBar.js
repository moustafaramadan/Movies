import React from 'react'
import "./NavBar.css"
import { Col, Container, Row } from 'react-bootstrap';
import Logo from "../../images/logo.png"
import {FaSearch} from "react-icons/fa"
const NavBar = ({onSearch}) => {

  
  return (
    <div className='bg-nav'> 
    <Container>
        <Row >
            <Col xs="12" sm="2" lg="1" className='logoo'>
                <img src={Logo} alt='logo' className='mt-2 ' style={{"width":"70px"}}/>
            </Col>
            <Col xs="12" sm="10" lg="11" >
                <div className='search mt-4 '> 
                  <button><FaSearch/></button>
                  <input type='text' placeholder='search' className='form-control custom-search' onChange={(e)=> onSearch(e.target.value)}/> 
                </div>
            </Col>
        </Row>
    </Container>
    
    </div>
  )
}

export default NavBar
