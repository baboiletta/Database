import React, { Component } from 'react';
import bg from '../../assets/anh/1.jpg'
import './banner.css';


class Banner extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div className="container-fluid top">
                <img className="banner" src= {bg}/>
            </div>
        );
    }
}

export default Banner;