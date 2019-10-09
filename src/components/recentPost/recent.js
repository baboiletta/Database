import React, { Component } from 'react';
import './recent.css'

import dulieu from './../../components/dulieu/dulieu.json'

class Recent extends Component {
    render() {
        return (
                <div className="mottin recent">
                
                <a href =""> <h5 className=" tieude phu">{this.props.title}</h5>
                 <img className="anhtieude con" src={this.props.ba} alt="Card image cap" />
                 </a>
         
            
               
            </div>
        );
    }
}

export default Recent;