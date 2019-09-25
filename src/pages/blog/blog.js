import React from 'react';
import FooterPage from '../../components/footer/footer';
import { locale } from '../../config/local';

class Blog extends React.Component{
    render(){
        return(
            <React.Fragment>
                 <div>{locale.blog}</div>
            <FooterPage></FooterPage>
        
            </React.Fragment>
        )
    }
}

export default Blog