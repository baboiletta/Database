import React from 'react';
import FooterPage from '../../components/footer/footer';

import MenuBar from '../../components/menubar/menu';
import Tincon from '../../components/blogs/tincon';
import b1 from './../../assets/anh/img/b1.jpg';
import b2 from './../../assets/anh/img/b2.jpeg';
import b3 from './../../assets/anh/img/b3.jpeg';
import b4 from './../../assets/anh/img/b4.jpg';
import b5 from './../../assets/anh/img/b5.jpg';
import b6 from './../../assets/anh/img/b6.jpg';
import b7 from './../../assets/anh/img/b7.jpg';
import dulieu from './../../components/dulieu/dulieu.json'
import './blog.scss'
import Searching from '../../components/search/search';
import Recent from '../../components/recentPost/recent';

import { locale } from '../../config/local';


class Blog extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="container blog">
                    <div class="row">
                        <div class="col-sm-8">
                            {
                                dulieu.map((value, key) => (
                                    <Tincon key={key}
                                        id={value.id}
                                        title={value.title}
                                        text={value.text}
                                        ba={value.ba}
                                    ></Tincon>
                                ))
                            }
                            <hr></hr>
                        </div>
                        {/* hetcol8 */}
                        <div class="col-sm-4 search">
                            <Searching></Searching>
                            <div className="khoiphai">
                                <h4>Tin Mới Nhất</h4>
                                {dulieu.map((value, key) => {
                                    if (key <= 5) {
                                        return(
                                        <Recent key={key}
                                            id={value.id}
                                            title={value.title}
                                            ba={value.ba}></Recent>)
                                    }
                                    
                                })}
                            </div>
                        </div>
                        {/* hetcol4 */}
                
                    {/* hetrow */}
                </div>
                </div>
                {/* hetcontainer */}
                <div>{locale.blog}</div>
                {/* <FooterPage></FooterPage> */}


            </React.Fragment >
        )
    }
}

export default Blog


