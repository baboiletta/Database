import React, { Component } from 'react';


class Relate extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            
                <div className="col-sm-3">
                    <a href=""> <h5 className=" tieude phu">{this.props.title}</h5>
                        <img className="anhtieude con" src={this.props.ba} alt="Card image cap" />
                    </a>
                </div>
          
        )
    }
}

export default Relate;