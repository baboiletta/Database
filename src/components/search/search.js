import React, { Component } from 'react';
import { FaSearch } from "react-icons/fa";
import './search.css'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';



class Searching extends Component {
    render() {
        return (
            <div className="timkiem">
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success"><FaSearch /></Button>
                    
                </Form>
            </div>
        );
    }
}

export default Searching;