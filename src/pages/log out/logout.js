import React from "react";
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom'
// import './login/login.css';

class Logout extends React.Component{
        constructor(){
          super()
          this.state = { 
            // logined: false
            logined: true
          }
        }
        dangxuat =() =>{
            let cooki = new Cookies()
            cooki.set ('dadangnhap', 'out')
            this.setState({
              logined: cooki.get('dadangnhap') === 'out'
            })
          }
        
          diRa(){
            if (this.state.logined){
              return <Redirect to ='/login'></Redirect>
          }
        }
    render(){
        return(
            <React.Fragment>
             {this.diRa()}
            <button type="button" className="btn  nut logout_btn" onClick ={() => this.dangxuat()}>Logout</button>
            </React.Fragment>
            
        )
    }
}
export default Logout