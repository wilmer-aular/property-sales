import React from "react";

const Navbar = ({enableButtonSee, signEstimate}) => {
  return (
    <>
<div className="nav-container" style={{minHeight: "16px"}}>
			<nav className="nav-1 fixed">
				<div className="navbar">
					<div className="container" style={{justifyContent: "center"}}>
						<div className="row" style={{width: "100%"}}>
							<div className="col-md-2 col-sm-6 col-xs-4">
								<a href="https://www.palmerstonmoving.com/" target="blank" >
									<img className="logo" alt="Logo" src="img/Palmerston-logo.webp" style={{ width: "auto", maxHeight: "30px", maxWidth: "100%"}}/>
								</a>
							</div>
							
							<div className="col-md-7 text-center col-md-pull-3  col-xs-12">
								<ul className="menu">
									<li><a className="inner-link" href="#testimonials">	Testimonials</a></li>
									<li className="has-dropdown"><a href="#home">Services</a>
										<ul className="subnav">
											<li className="has-dropdown"><a target="blank" href="https://www.propiertiesSell.ca/moving/estimate/">Estimate</a></li>
											<li><a  target="blank" href="https://www.propiertiesSell.ca/aboutUs/">	Delivery</a></li>
											<li><a  target="blank" href="https://www.propiertiesSell.ca/storage-units/">	Storage</a></li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</nav>

		</div>
    </>
  );
};

export default Navbar;