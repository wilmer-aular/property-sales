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
								<a href="https://www.propiertiesSell.com/" target="blank" >
									<img className="logo" alt="Logo" src="logo.jpg" style={{ width: "auto", maxHeight: "70px", maxWidth: "100%"}}/>
								</a>
							</div>
							
							<div className="col-md-7 text-center col-md-pull-3  col-xs-12">
								<ul className="menu">
									<li><a className="inner-link" href="#properties"> Properties</a></li>
									<li><a className="inner-link" href="#testimonials">	Testimonials</a></li>
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