import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Profile from '../pages/profile/profile';
import Dashboard from '../pages/dashboard/dashboard';
import Home from '../pages/home/home';
import TuyenDung from '../pages/tuyendung/tuyendung';
import LoginPage from '../pages/login/login';

class MainRouter extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/login' exact component={LoginPage}></Route>
                    <Route path='/profile' exact component={Profile}></Route>
                    <Route path='/dashboard' exact component={Dashboard}></Route>
                    <Route path='/tuyendung' exact component={TuyenDung}></Route>
                    <Route path='/home' exact component={Home}></Route>


                </Switch>
            </BrowserRouter>
        )
    }
}

// const MainRouter = () => {
//     return(
//         <BrowserRouter>
//             <Switch>
//                 <Route path='/' exact component={Home}></Route>
//                 <Route path='/login' exact component={LoginPage}></Route>
//                 <Route path='/profile' exact component={Profile}></Route>
//                 <Route path='/dashboard' exact component={Dashboard}></Route>
//             </Switch>
//         </BrowserRouter>
//     )
// }

export default MainRouter