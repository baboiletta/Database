import React from 'react';

class MenuBar extends React.Component {
    render() {
        return (
            
           
           
           <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
               <a class="navbar-brand" href="#">Title</a>
               <ul class="nav navbar-nav">
                   <li class="active">
                       <a href="/">Login</a>
                   </li>
                   <li>
                       <a href="/home">Home</a>
                   </li>
                   <li>
                       <a href="/profile">Profile</a>
                   </li>
                   <li>
                       <a href="/dashboard">Dashboard</a>
                   </li>
               </ul>
           </nav>
           
           
            
        )
    }
}

export default MenuBar