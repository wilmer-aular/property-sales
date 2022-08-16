import React from "react";


const LisProperties = ({list}) => {
console.log(list);
  return (
    <>
<section id="press" className="features features-2" >
				<div className="container">
					<div className="row" style={{marginTop:"50px"}}>
						<div className="col-md-1 col-md-offset-1 col-sm-12"></div>
						<div className="col-md-10 col-md-offset-1 col-sm-12 text-center">
							<h4>Find your ideal home</h4>	
							<p>Finding your dream home is a lot like finding the perfect partner. It might take a while, but when you find the one, you know you’ll always have the support of someone who just gets you. And when you find your dream home, you’ll always have the perfect place to unwind and make memories.
							</p>	
						</div>
					</div>
					<div className="row">
					{
					list?.map((i, index) => (
						<div key={index} className="col-sm-4 text-center feature">
							<div className="wrapper">
								<>
								<div className="hover" style={{backgroundImage: "url('img/instagram.jpg')",paddingTop: "55%", backgroundPosition: "top center", backgroundSize: "100%"}}>
								</div>
								<div className="text">
									<div  className="innerBorder" style={{paddingTop: "18%"}}>
										<div className="modal-video-container">
											<div onClick={() => {}} className="play-button small" style={{marginTop: "-30px", marginLeft: "-30px", width: "60px", height: "60px"}}></div>
										</div>
									</div>
								</div>
								</>
							</div>
							<br/>
							<h5>Trusted Service Partner of <strong>ELTE</strong></h5>
						</div>
						))
					}
						
					</div>
				</div>
			</section>
    </>
  );
};

export default LisProperties;
