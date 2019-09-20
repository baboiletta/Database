import React from 'react';
import Cookies from 'universal-cookie'
import { Redirect } from 'react-router-dom'
class Auth extends React.Component {
    constructor(props) {
        super(props)
        const cooki = new Cookies()
        this.state = {
            logined: cooki.get('dadangnhap')
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