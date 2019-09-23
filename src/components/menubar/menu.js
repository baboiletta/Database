import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FaUser } from "react-icons/fa";
import { locale } from '../../config/local'

class MenuBar extends React.Component {
  constructor() {
    super()
    this.state = {
      lang: 'vi'
    }
    console.log(locale)
    locale.setLanguage(this.state.lang)
  }
  switchLanguage = () => {
    this.setState({
      lang: this.state.lang == 'vi' ? 'en' : 'vi'
    })
    locale.setLanguage(this.state.lang)
    this.setState({})
  }
  render() {
    return (

      <React.Fragment>
        <div className="container-fluid">


          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Green Academy</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/profile">{locale.training}</Nav.Link>
                {/* <Nav.Link href="/khoadaotao">Khoa Dao Tao</Nav.Link> */}
                <NavDropdown title="Khoa Dao Tao" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Tieng Han</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Web Design</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Mobile</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">FullStack Developer</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/blog">{locale.blog}</Nav.Link>
                <Nav.Link href="/gioithieu">{locale.about}</Nav.Link>
                <Nav.Link href="/tuyendung">{locale.hiring}</Nav.Link>
                <Nav.Link href="/lienhe">{locale.contact}</Nav.Link>

              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success" className="mr-2">{locale.search}</Button>
                <FaUser />
                <NavDropdown title="   " id="basic-nav-dropdown">
                  <NavDropdown.Item href="/logout">{locale.logout}</NavDropdown.Item>
                </NavDropdown>
                <Button className="primary" onClick={() => this.switchLanguage()}> {locale.lang}</Button>
                {/* <Button className="primary" onClick={() => this.switchLanguage()}> vi</Button> */}

              </Form>
            </Navbar.Collapse>
          </Navbar>
        </div>

      </React.Fragment>





    )
  }
}

export default MenuBar