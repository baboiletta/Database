import React from 'react';
import './App.css';
import MainRouter from './config/router';
import MenuBar from './components/menubar/menu';
import LoginPage from './pages/login/login';
import FooterPage from './components/footer/footer';
import Cookies from 'universal-cookie';
import { locale } from './config/local';
import { ListenService } from './services/listen';




class Aaa extends React.Component {
  constructor(){
    super()
    let cooki = new Cookies()
    let lang = cooki.get ('lang') === undefined ? 'vi' : cooki.get('lang')
    locale.setLanguage(lang)
  }
  componentDidMount(){
    let self = this
    ListenService.onChangeLang().subscribe(
      () => {
        self.setState({})
      }
    )
  }
  render() {
    return (
      <React.Fragment>
        <div className="App">
          {/* <LoginPage></LoginPage> */}
          <MenuBar></MenuBar>
          <MainRouter></MainRouter>
          {/* <FooterPage></FooterPage> */}
        </div>
      </React.Fragment>
    )
  }

}

export default Aaa
