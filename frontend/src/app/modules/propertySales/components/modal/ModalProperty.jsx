import React from "react";
import {  ModalSave } from "@src/components";


const ModalProperty = ({ property, show, handleShow, handleClose }) => {
  const propsModal = { show, handleShow, handleClose };
  
 
  return (
    <>
      <ModalSave
        size="lg"
        withoutButtonSave={true}
        title="Property information"
        variant="primary"
        deleteText="Close"
        variantDelete="danger"
        titleButton=" Agregar Nuevo?"
        buttonText=" Agregar Nuevo"
        variantButtom="default"
        classButtom={" btn-hover-primary btn-primary btn-sm"}
        {...propsModal}
      >
        <>
        <div className="features features-10">
				<div className="container">
				<h4 className="text-center">Your ideal {property.type}</h4>
					<div className="row v-align-children">
						<div className="col-md-6">
							<div className="wrapper">
							
								<div className="hover" style={{backgroundImage: "url('media/images/House/0.jpg')",paddingTop: "55%", backgroundPosition: "top center", backgroundSize: "100%", maxHeight: "100vh"}}>
								</div>
							</div>
						</div>
						<div className="col-md-5 col-md-offset-1">
							<ul className="bulletPoints">
                <li><strong>Price:</strong> $ {property.price}</li>
								<li><strong>Country:</strong> {property.country}</li>
								<li><strong>City: </strong>{property.city}</li>
								<li><strong>Address:</strong> {property.address}</li>
								<li><strong>Number of rooms:</strong> {property.numberOfRooms}</li>
								<li><strong>Number of bathrooms:</strong> {property.numberOfBathrooms}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
        </>
      </ModalSave>
    </>
  );
};
export default ModalProperty;
