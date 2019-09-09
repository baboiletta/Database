import React from 'react';

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