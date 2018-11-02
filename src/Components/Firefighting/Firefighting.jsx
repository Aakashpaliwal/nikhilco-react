import React, { Component } from 'react';
import './Firefighting.css';
import {Link} from 'react-router-dom';
class Firefighting extends Component {
    render() {
        return (
            <div>
                 {/*bradcrumb */}
                 <div className="beradcrumb">
                    <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to ="/">Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Firefighting</li>
                </ol>
                </nav>
                    </div>
                {/*end breadcrumb */}
                {/*content*/}
                <div className="fire-parallax">
                </div>
                    <div className="hvac-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                    <h3>Firefighting Systems Services</h3>
                                    <p>It is a long established fact that a reader will be distracted by the</p>
                                    <hr className="below-header-hr"></hr>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="hvac-custom-li">
                    <ul>
                    <li>Hydrants</li>
                    <li>Wet Sprinklers</li>
                    <li>Pumping/piping systems</li>
                    <li>Pre-action systems</li>
                    <li>Medium velocity system</li>
                    <li>High velocity system</li>
                    <li>Hand appliances</li>
                    <li>Industrial Piping</li>
                    </ul>
                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/*end content*/}

                
            </div>
        );
    }
}

export default Firefighting;