import React from 'react';
import FooterPage from '../../components/footer/footer';
import {locale} from '../../config/local'
import NgonNgu from '../../components/setlocale/setlocal';

class LienHe extends React.Component{
    
    render(){
        return(
            <React.Fragment>
                <div>{locale.contact}</div>
            
                <FooterPage></FooterPage>

            </React.Fragment>
        )
    }
}

export default LienHe