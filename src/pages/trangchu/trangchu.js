import React from 'react';

import { locale } from '../../config/local';

class TrangChu extends React.Component{
    render(){
        return(
            <div>{locale.home}</div>
import Banner from '../../components/banner/banner';
import Content from '../../components/content-home/ct_home';
import './trangchu.css';


class TrangChu extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Banner></Banner>
                <div class="container">
                    <div class="row">
                        <div className="col-sm-8 ND ">
                            <Content tieude="Man must explore, and this is exploration at its greatest "
                                noidung="Problems look mighty small from 150 miles up "
                            ></Content>
                            <hr />
                            <Content tieude="I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.  "
                                noidung="Problems look mighty small from 150 miles up "
                            ></Content>
                            <hr />
                            <Content tieude="Science has not yet mastered prophecy  "
                                noidung="We predict too much for the next year and yet far too little for the next ten.  "
                            ></Content>
                            <hr />
                            <Content tieude="Failure is not an option  "
                                noidung="Many say exploration is part of our destiny, but it’s actually our duty to future generations.  "
                            ></Content>
                            <hr />
                        </div>

                    </div>
                </div>





            </React.Fragment>

        )
    }
}

export default TrangChu