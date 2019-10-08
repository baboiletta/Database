import React, { Component } from 'react';
import b1 from './../../assets/anh/img/b1.jpg'
import './tincon.css';


class Tincon extends Component {


    render() {
        return (
            <div className="mottin">
                
                        <h5 className=" tieude">{this.props.title}</h5>
                        <img className="anhtieude mt-3" src={this.props.ba} alt="Card image cap" />
                        <div className="ochua">
                            <p className="text">{this.props.text}</p>
                        </div>
                       
                        <a href="" className="btn btn-primary nut mt-3">Continue</a>
                
            </div>
        )
    }
}

export default Tincon;