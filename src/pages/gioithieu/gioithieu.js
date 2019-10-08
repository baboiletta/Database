import React from 'react';
import MenuBar from '../../components/menubar/menu';
import FooterPage from '../../components/footer/footer';
import { locale } from '../../config/local';

class GioiThieu extends React.Component{
    render(){
        return(
            <React.Fragment>
               <div>{locale.about}</div>
               <FooterPage></FooterPage>
            </React.Fragment>
        )
    }
}

export default GioiThieu