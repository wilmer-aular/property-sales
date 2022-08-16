import React from "react";

const Footer = () => {
  return (
    <>
<footer className="footer footer-1">
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<ul className="social-links">
								<li><a href="https://www.facebook.com/PropiertiesSell/" target="blank" ><i className="fab fa-facebook" style={{fontSize: "20px"}}></i></a></li>
								<li><a href="https://instagram.com/PropiertiesSell" target="blank" ><i className="fab fa-instagram" style={{fontSize: "20px"}}></i></a></li>
								<li><a href="https://ca.linkedin.com/company/PropiertiesSell" target="blank" ><i className="fab fa-linkedin" style={{fontSize: "20px"}}></i></a></li>
								<li><a href="mailto:hello@PropiertiesSell.com" target="blank" ><i className="fa fa-envelope" style={{fontSize: "20px"}}></i></a></li>
								<li><a href="https://wa.link/PropiertiesSell" target="blank" ><i className="fab fa-whatsapp" style={{fontSize: "20px"}}></i></a></li>
								<li><a href="tel:111111111" target="blank" ><i className="fa fa-phone" style={{fontSize: "20px"}}></i></a></li>
							</ul>
						</div>
						<div className="col-sm-4 text-center d-none d-sm-block">
							<p className="sub">
								<a href="https://www.PropiertiesSell.ca" target="blank" >Propierties Sell</a>
							</p>
						</div>

						<div className="col-sm-4 text-right d-none d-sm-block">
							<a href="https://www.PropiertiesSell.com" target="blank" >
								<img alt="Logo" src="img/Best-movers-in-toronto.webp"	style={{maxHeight: "50px", maxWidth: "50px", objectFit: "contain"}}/>
							</a>
						</div>
					</div>
				</div>
			</footer>
    </>
  );
};

export default Footer;
