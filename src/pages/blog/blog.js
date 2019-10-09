import React from 'react';
import FooterPage from '../../components/footer/footer';

import MenuBar from '../../components/menubar/menu';
import Tincon from '../../components/blogs/tincon';
import dulieu from './../../components/dulieu/dulieu.json'
import './blog.scss'
import Searching from '../../components/search/search';
import Recent from '../../components/recentPost/recent';

import { locale } from '../../config/local';


class Blog extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container blog">
                    <div className="row">
                        <div className="col-sm-8">
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
                            <div className="khoiphai">
                                <h4>Tin Mới Nhất</h4>
                                {
                                   
                                    dulieu.map((value, key) => {
                                    if(value.id !== this.props.match.parrams.id){
                                        if(key <=5) {
                                        
                                            return(
                                            <Recent key={key}
                                                id={value.id}
                                                title={value.title}
                                                ba={value.ba}></Recent>)}}
                                    }
                                    
                                    
                                )}
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


