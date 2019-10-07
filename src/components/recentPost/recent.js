import React, { Component } from 'react';

import dulieu from './../../components/dulieu/dulieu.json'

class Recent extends Component {
    render() {
        return (
            <div>
            
                <p >{this.props.title}</p>
            </div>
        );
    }
}

export default Recent;