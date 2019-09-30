import React from 'react';
import FooterPage from '../../components/footer/footer';
import { locale } from '../../config/local';


class Profile extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div>{locale.profile}</div>
                <FooterPage></FooterPage>

            </React.Fragment>
        )
    }
}
export default Profile