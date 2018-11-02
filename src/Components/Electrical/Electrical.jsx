import React, { Component } from 'react';
import './Electrical.css';
import {Link} from 'react-router-dom';

class Electrical extends Component {
    render() {
        return (
            <div>
                 {/*bradcrumb */}
                 <div className="beradcrumb">
                    <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to ="/">Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Electrical</li>
                </ol>
                </nav>
                    </div>
                {/*end breadcrumb */}
                {/*content*/}
                <div className="electric-parallax">
                </div>
                    <div className="hvac-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                    <h3>Electrical Services</h3>
                                    <p>It is a long established fact that a reader will be distracted by the</p>
                                    <hr className="below-header-hr"></hr>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="hvac-custom-li">
                    <ul>
                    <li>HT/LT Distribution</li>
                    <li>Distribution /Power Panels</li>
                    <li>Distribution Boards / Switchgears</li>
                    <li>Light / Power point / UPS point wiring</li>
                    <li>Raceways / Cable Trays /GI Trunk etc.</li>
                    <li>Light Fixtures / Switch Sockets</li>
                    <li>Chemical/Bore Earthing etc.</li>
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

export default Electrical;