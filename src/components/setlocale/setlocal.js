import React from 'react';
import { locale } from '../../config/local'
import { Button } from 'react-bootstrap';

class NgonNgu extends React.Component {
    constructor() {
        super()
        this.state = {
            lang: 'vi'
        }
        console.log(locale)
        locale.setLanguage(this.state.lang)
    }
    switchLanguage = () => {
        this.setState({
            lang: this.state.lang == 'vi' ? 'en' : 'vi'
        })
        locale.setLanguage(this.state.lang)
        this.setState({})
    }
    render() {
        return (
            <React.Fragment>
                <Button className="primary" onClick={() => this.switchLanguage()}> {locale.lang}</Button>
            </React.Fragment>





        )
    }
}

export default NgonNgu