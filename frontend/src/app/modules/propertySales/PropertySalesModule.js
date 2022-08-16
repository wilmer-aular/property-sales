import React from "react";
import Footer from "./components/Footer";
import LisProperties from "./components/LisProperties";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
import "./css/estimate.css";
import "./css/custom.css";
import "./css/sofar.css";
import "./css/theme.css";


const PropertySalesModule = ({ list }) => {
  return (
    <>
<div className="estimateNew">
			{/*  NAVBAR  */}
			<Navbar  />
		<div className="main-container">
			{/* LIST */}
			<LisProperties list={list}/>
			{/* TESTIMONIALS*/}
			<Testimonial /> 
			{/* FOOTER */}
			<Footer />
		</div>
	</div>
    </>
  );
};

export default PropertySalesModule;
