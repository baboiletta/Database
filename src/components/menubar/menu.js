import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
class MenuBar extends React.Component {
<<<<<<< HEAD
    render() {
        return (

            <React.Fragment>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Green Academy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Trang Chu</Nav.Link>
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
                        </Form>
                    </Navbar.Collapse>
                </Navbar>


            </React.Fragment>





        )
    }
=======
  render() {
    return (

      <React.Fragment>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Green Academy</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
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
            </Form>
          </Navbar.Collapse>
        </Navbar>


      </React.Fragment>





    )
  }
>>>>>>> c4dbaa2d21aa05c1997ac165b625af017af67a1d
}

export default MenuBar