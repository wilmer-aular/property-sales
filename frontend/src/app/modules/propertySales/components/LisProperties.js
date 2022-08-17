import React, {useEffect, useState} from "react";
import ModalProperty from "./modal/ModalProperty";
import {Filters} from "../../generic/Filters"

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
		let countOffice = 0;
		let countTerrain = 0;
		const entities = list.map((i) => {
			if(i.type === 'House'){
				if(countHome === 33) countHome = 0;
				i.imgUrl = `media/images/${i.type}/${countHome}.jpg`;
				countHome += 1;
			}else if (i.type === 'Apartments') {
				if(countApart === 33) countApart = 0;
				i.imgUrl = `media/images/${i.type}/${countApart}.jpg`;
				countApart += 1;
			}
			else if (i.type === 'Office') {
				if(countOffice === 33) countOffice = 0;
				i.imgUrl = `media/images/${i.type}/${countOffice}.jpg`;
				countOffice += 1;
			}
			else {
				if(countTerrain === 33) countTerrain = 0;
				i.imgUrl = `media/images/${i.type}/${countTerrain}.jpg`;
				countTerrain += 1;
			}
			return i;
		})
		setEntities(entities);
	}else {
		setEntities([]);
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
												<span onClick={()=>handleDetail(i._id)} style={{color: 'white', fontSize:'30px', cursor:"pointer"}}>SEE DETAIL</span>
											</div>
										</div>
								</div>
								</>
							</div>
							<div onClick={()=>handleDetail(i._id)}>
								<h5  style={{fontSize: 'inherit', cursor: "pointer"}}><strong>{i.type}</strong> in {i.country}, {i.city}.</h5>
								<span style={{fontSize: 'inherit', cursor: "pointer"}}>$ {i.price}.</span>
							</div>
							
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
