import React, { Component } from 'react';
import './PHE.css';
import {Link} from 'react-router-dom';

class PHE extends Component {
    render() {
        return (
            <div>
                {/*bradcrumb */}
                <div className="beradcrumb">
                    <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to ="/">Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">PHE</li>
                </ol>
                </nav>
                    </div>
                {/*end breadcrumb */}
                {/*content*/}
                <div className="phe-parallax">
                </div>
                    <div className="hvac-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                    <h3>PHE Services</h3>
                                    <p>It is a long established fact that a reader will be distracted by the</p>
                                    <hr className="below-header-hr"></hr>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="hvac-custom-li">
                    <ul>
                    <li>Water supply system</li>
                    <li>Drainage system (Sewage/ Storm)</li>
                    <li>Pumping System/ Hydro pneumatic system</li>
                    <li>Water Treatment Plant</li>
                    <li>Sewage Treatment Plant</li>
                    <li>Effluent Treatment Plant</li>
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

export default PHE;