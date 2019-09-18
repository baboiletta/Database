import React from 'react';
import MenuBar from '../../components/menubar/menu';
import FooterPage from '../../components/footer/footer';

class GioiThieu extends React.Component{
    render(){
        return(
            <React.Fragment>
               <div>Gioi Thieu</div>
               <FooterPage></FooterPage>
            </React.Fragment>
        )
    }
}

export default GioiThieu