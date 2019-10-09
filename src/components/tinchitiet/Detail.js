import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './detail.css';
import dulieu from './../../components/dulieu/dulieu.json'
import { from } from 'rxjs';
import Tincon from '../blogs/tincon';
import Relate from './../tinlienquan/relate'


class Detail extends Component {

    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <div className="to">
                    <div >
                        {dulieu.map((value, key) => {

                            if (value.id == this.props.match.params.id) {
                                return (
                                    <div className="container banner">
                                        <div className="row">
                                            <div className="col-sm-12 bo">
                                                <img className="anhtieude mt-3 pt-3" src={value.ba} alt="Card image cap" />
                                                <h3 className="lead text-center">{value.title}</h3>


                                                <hr />
                                                <p className="noidung">{value.text}</p>
                                            </div>
                                            {/* hetcol */}
                                            <div className="col-sm-4">

                                            </div>
                                            {/* hetcol4 */}
                                        </div>
                                    </div>

                                )
                            }
                        })
                        }

                    </div>
                    <div className="container tinlienquan">
                        <h4>Tin Mới Nhất</h4>
                        <div className="row">
                            {
                                dulieu.map((value, key) => {
                                    if (value.id != this.props.match.params.id) {
                                        if (key <= 4) {

                                            return (
                                                <Relate key={key}
                                                    id={value.id}
                                                    title={value.title}
                                                    ba={value.ba}></Relate>)
                                        }
                                    }
                                }
                                )}

                        </div>

                    </div>
                </div>

            </React.Fragment>



        )
    }
}

export default Detail;