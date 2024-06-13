import React, { Component } from 'react';
import prescription from '../../images/work/prescription.png';
import medical from '../../images/work/medical.png';
import syringe from '../../images/work/syringe.png';

import bg1 from '../../images/background/line-bg1.png';

class aboutSection extends Component{
	render(){
		return(
			<>
				
				<section className="section-area section-sp5 work-area" style={{backgroundImage: "url("+bg1+")", backgroundRepeat:" no-repeat", backgroundPosition: "center", backgroundSize: "100%",marginTop:'90px'}}>
					<div className="container-sm">
						<div className="row justify-content-center">
							<div className="col-lg-4 col-sm-6 mb-20">
							<div className="work-bx" style={{ backgroundColor: '#3EC3CF', textAlign: 'center' }}>
							<div style={{ backgroundColor: 'white', padding: '10px' }}>

							<img src={medical} alt=""/>
							</div>
							
							<h5 className="button" style={{ color: 'white', marginTop: '30px' }}>Treatment</h5>
						</div>
							</div>
							
							<div className="col-lg-4 col-sm-6 mb-30">
							<div className="work-bx active" style={{ backgroundColor: '#84A9D9', textAlign: 'center' }}>
								<div style={{ backgroundColor: 'white', padding: '20px' }}>
								<img src={syringe} alt=""/>
								</div>
								<h5 className="button" style={{ color: 'white', marginTop: '30px' }}>Diagnostics</h5>
							</div>
						</div>

						<div className="col-lg-4 col-sm-6 mb-30">
							<div className="work-bx" style={{ backgroundColor: '#3EC3CF', textAlign: 'center' }}>
								<div style={{ backgroundColor: 'white', padding: '20px' }}>
								<img src={prescription} alt=""/>
								</div>
								<h5 className="button" style={{ color: 'white', marginTop: '30px' }}>Consultation</h5>
							</div>
						</div>

						</div>
					</div>
				</section>
				
			</>
		);
	}
}

export default aboutSection;