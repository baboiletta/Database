import React from 'react';
import './login.css';
import img_logo from '../../assets/anh/1.png';
import {FaUser} from "react-icons/fa";
import {FaKey} from "react-icons/fa";


class LoginPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="nenden">
                    <div className="nenxanh">
                        <div className="nenvang container">
                            <div className="row"> 
                                <div className="col-sm-8 push-4 login">
                                    <form>
                                    <div className="input-group mb-3 ">
                                        <div className="input-group-append">
                                            <span className="input-group-text"><FaUser /></span>
                                        </div>
                                        <input type="text"   className="form-control input_user" value="" placeholder="username"></input>
                                    </div>
                                    <div className="input-group ">
                                        <div className="input-group-append">
                                            <span className="input-group-text"><FaKey /> </span>
                                        </div>
                                        <input type="password" className="form-control input_pass" value="" placeholder="password"></input>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customControlInline"></input>
                                            <label className="custom-control-label" for="customControlInline">Remember me</label>
                                        </div>
                                    </div>
                                    </form>
                                    
                                        <div className="justify-content-center mt-1 login_container">
                                            <button type="button"   className="btn login_btn">Login</button>
                                        </div>
                                        <div className="mt-2">
                                            <div className= "justify-content-center links">
                                                Don't have an account? <a href="#"  >Sign Up</a>
                                            </div>
                                            <div className=" justify-content-center links">
                                                <a href="#">Forgot your password?</a>
                                            </div>
                                        </div>
                                </div>
                                	{/* <!-- hetcol4 --> */}
                            </div> 
                            {/* <!-- hetrow --> */}
                            {/* <!-- hetnenvang --> */}
                        </div> 
                        <div className="logo">
                            <div className="nenxam"></div>
                            <div className="nentrang"></div>
                            <img src={img_logo} alt=""></img>
                        </div>
                    </div> 
                      {/* <!-- hetnenxanh --> */}
                </div>
                  {/* <!-- hetnenden --> */}
            </React.Fragment>
            )
        }
    }
    

class LoginPage extends React.Component{
    render(){
        return(
            <div className='form'>
                <label for='name'>UserName</label>
                <input type='text' placeholder='nhap do' required></input>
                <label for='name'>Password</label>
                <input type='password' placeholder='nhap do' required></input>
                <button type='submit' className='btn-btn-primary'>submit</button>
            </div>
            
        )
    }
}



export default LoginPage