import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FaUser } from "react-icons/fa";
import { locale } from '../../config/local'
import NgonNgu from '../setlocale/setlocal';
import Cookies from 'universal-cookie';
import { ListenService } from '../../services/listen';
import './menu.scss'
import Searching from '../search/search';

class MenuBar extends React.Component {
  constructor() {
    super()
  }

  switchLanguage = (lag) => {
    let cooki = new Cookies()
    cooki.set('lang', lag)
    locale.setLanguage(lag)
    this.setState({})
    ListenService.switchLang(lag)
  }
  render() {
    return (

      <React.Fragment>
        <div className="container-fluid menutop">
          <Navbar >
            <div className="container">
              <Navbar.Brand href="/">Green Academy</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  {/* <Nav.Link href="/profile">{locale.training}</Nav.Link> */}
                  <NavDropdown   className ="_6"  title={locale.training} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Tieng Han</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Web Design</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Mobile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">FullStack Developer</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link className ="_1" href="/blog">{locale.blog}</Nav.Link>
                  <Nav.Link className ="_2" href="/gioithieu">{locale.about}</Nav.Link>
                  <Nav.Link className ="_3" href="/tuyendung">{locale.hiring}</Nav.Link>
                  <Nav.Link className ="_4" href="/lienhe">{locale.contact}</Nav.Link>
                </Nav>
                <Form inline className="menuleft">
                  <Searching></Searching>
                  <NavDropdown title={FaUser} id="basic-nav-dropdown">
                    <NavDropdown.Item href="/logout">{locale.logout}</NavDropdown.Item>
                  </NavDropdown>
                  {/* <Button className="primary" onClick={() => this.switchLanguage()}> {locale.lang}</Button> */}
                  <NavDropdown title={locale.lag} id="basic-nav-dropdown trans">
                    <NavDropdown.Item onSelect={() => this.switchLanguage('vi')} >{locale.vi}</NavDropdown.Item>
                    <NavDropdown.Item onSelect={() => this.switchLanguage('en')} >{locale.en}</NavDropdown.Item>
                  </NavDropdown>
                </Form>
              </Navbar.Collapse>
            </div>

          </Navbar>
        </div>
      </React.Fragment>
    )
  }
}

export default MenuBar