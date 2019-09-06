import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginPage from '../pages/login/login';
import Profile from '../pages/profile/profile';
import Dashboard from '../pages/dashboard/dashboard';
import Home from '../pages/home/home';

class MainRouter extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/login' exact component={LoginPage}></Route>
                    <Route path='/profile' exact component={Profile}></Route>
                    <Route path='/dashboard' exact component={Dashboard}></Route>


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