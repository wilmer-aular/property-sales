import React from "react";

const Navbar = () => {
  return (
    <>
<div className="nav-container" style={{minHeight: "16px"}}>
			<nav className="nav-1 fixed">
				<div className="navbar">
					<div className="container" style={{justifyContent: "center"}}>
						<div className="row" style={{width: "100%"}}>
							<div className="col-md-2 col-sm-6 col-xs-4">
								<a href="/properties_sell" target="blank" >
									<img className="logo" alt="Logo" src="logo.jpeg" style={{ width: "auto", maxHeight: "50px", maxWidth: "100%"}}/>
								</a>
							</div>
							
							<div className="col-md-10 text-right col-md-pull-3  col-xs-12">
								<ul className="menu">
									<li><a className="inner-link" href="#properties"> Properties</a></li>
									<li><a className="inner-link" href="#testimonials">	Testimonials</a></li>
									<li className="has-dropdown"><a href="#home">Post</a>
										<ul className="subnav">
											<li className="has-dropdown"><a target="blank" href="/auth">	Login</a></li>
											<li><a  target="blank" href="/register">Register</a></li>
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