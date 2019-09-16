import React from 'react';

class MenuBar extends React.Component {
    render() {
        return (
            
    <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="nav navbar-nav">
                   <li class="active">
                       <a href="/login">Login</a>
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
                   <li>
                       <a href="/tuyendung">Tuyen Dung</a>
                   </li>
               </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
         
    </React.Fragment>
           
          
           
           
            
        )
    }
}

export default MenuBar