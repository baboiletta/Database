import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FaUser } from "react-icons/fa";

class MenuBar extends React.Component {
  render() {
    return (

      <React.Fragment>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Green Academy</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="basic-navbar-nav nav-stick">
            <Nav className="mr-auto">
              <Nav.Link href="/profile">Ptofile</Nav.Link>
              {/* <Nav.Link href="/khoadaotao">Khoa Dao Tao</Nav.Link> */}
              <NavDropdown title="Khoa Dao Tao" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Tieng Han</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Web Design</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Mobile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">FullStack Developer</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/gioithieu">Gioi Thieu</Nav.Link>
              <Nav.Link href="/tuyendung">Tuyen Dung</Nav.Link>
              <Nav.Link href="/lienhe">Lien He</Nav.Link>

            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
              <FaUser />
              <NavDropdown title="   " id="basic-nav-dropdown">
                <NavDropdown.Item href="/logout">Dang xuat</NavDropdown.Item>
            
              </NavDropdown>
            </Form>
          </Navbar.Collapse>
        </Navbar>


      </React.Fragment>





    )
  }
}

export default MenuBar