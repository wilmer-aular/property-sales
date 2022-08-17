import React, {useEffect, useState} from "react";
import ModalProperty from "./modal/ModalProperty";
import {Filters} from "./Filters"

const LisProperties = ({list, handleFilters, filtered}) => {
const [entities, setEntities] = useState([])
const [show, setShow] = useState(false);
const [property, setProperty] = useState({});
const handleShow = () => setShow(true);

const handleClose = () => {
  setShow(false);
  setProperty({});
};

const handleDetail = (id) => {
    const property = entities.find((i) => i._id === id);
    setProperty({ ...property });
    handleShow(true);
  };

  useEffect(()=>{
	if(list.length){
		let countHome = 0;
		let countApart = 0;
		const entities = list.map((i) => {
			if(i.type === 'House'){
				if(countHome === 33) countHome = 0;
				i.imgUrl = `media/images/${i.type}/${countHome}.jpg`;
				countHome += 1;
			}else {
				if(countApart === 33) countApart = 0;
				i.imgUrl = `media/images/${i.type}/${countApart}.jpg`;
				countApart += 1;
			}
			return i;
		})
		setEntities(entities);
	}
  },[list, setEntities])

const propsModal = { show, property, handleShow, handleClose };
  return (
    <>
	 <ModalProperty {...propsModal} />
		<section id="properties" className="features features-2" >
				<div className="container">
					<div className="row" style={{marginTop:"0px"}}>
						<div className="col-md-1 col-md-offset-1 col-sm-12"></div>
						<div className="col-md-10 col-md-offset-1 col-sm-12 text-center">
							<h4>Find your ideal home</h4>	
							<p>Finding your dream home is a lot like finding the perfect partner. It might take a while, but when you find the one, you know you’ll always have the support of someone who just gets you. And when you find your dream home, you’ll always have the perfect place to unwind and make memories.
							</p>	
						</div>
					</div>
					<Filters handleSearch={handleFilters} filtered={filtered}/>
					<div className="row">
					{
						entities?.map((i, index) => (
						<div key={index} className="col-sm-4 text-center feature">
							<div className="wrapper">
								<>
								<div className="hover" style={{backgroundImage: `url(${i.imgUrl})`,paddingTop: "55%", backgroundPosition: "top center", backgroundSize: "100%"}}>
								</div>
								<div className="text">
								<div  className="innerBorder" style={{paddingTop: "18%"}}>
											<div className="modal-video-container">
												<span onClick={()=>handleDetail(i._id)} style={{color: 'white', fontSize:'30px', cursor:"pointer"}}>DETAIL</span>
											</div>
										</div>
								</div>
								</>
							</div>
							<br/>
							<h5>{i.type} in {i.country} <strong>{i.city}</strong></h5>
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
