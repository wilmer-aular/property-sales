import React from "react";
import { SlideShow } from "@src/components";
import { testimonial } from './util'

const Testimonial = () => {
  return (
    <>
<section id="testimonials" className="testimonials testimonials-4 " style={{backgroundColor: "#f2f2f2"}}>
	<div  className="slider">
			<SlideShow>
			{testimonial.map((i, index)=>(
				<div key={index} className="flex-active-slide"
					style={{width: "100%", float: "left", marginRight: "-100%", position: "relative", opacity: 1, display: "block", zIndex: 2}}>
					<div className="container">
						<div className="row">
							<div className="col-md-1 col-md-offset-1 col-sm-12 text-center"></div>
							<div className="col-md-10 col-md-offset-1 col-sm-12 text-center">
								<h5 style={{fontFamily: "inherit"}}>{i.note}</h5>
								<img alt="Rachel Subic" src={i.imgUrl}	draggable="false" className="testimonialImage"/>
								<div>
									<p>{i.name}</p>
								</div>
								<div>
									<i className="fa fa-star accentColor"></i> <i className="fa fa-star accentColor"></i> <i className="fa fa-star accentColor"></i> <i className="fa fa-star accentColor"></i> <i className="fa fa-star accentColor"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
				
			</SlideShow>
	</div>
</section>
    </>
  );
};

export default Testimonial;
