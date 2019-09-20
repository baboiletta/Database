import React from 'react';
import Cookie from 'universal-cookie'
import { Redirect } from 'react-router-dom'
class Auth extends React.Component {
    constructor(props) {
        super(props)
        const cookies = new Cookie()
        this.state = {
            logined: cookies.get('dadangnhap')
        }
        console.log(this.state)
    }
    renderRedirectTo() {
        if (this.state.logined === 'thanhcong') {
            return this.props.dung
        }
        else {
            return <Redirect to={this.props.sai}></Redirect>
        }
    }
   render() {
        return (
            <React.Fragment>
                {this.renderRedirectTo()}
            </React.Fragment>
        )
    }
}
export default Auth