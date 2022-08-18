export const getListWithImage = (list) => {
    let countHome = 0;
		let countApart = 0;
		let countOffice = 0;
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
			else {
				if(countOffice === 4) countOffice = 0;
				i.imgUrl = `media/images/${i.type}/${countOffice}.jpg`;
				countOffice += 1;
			}
			return i;
		})
        return entities;
}

export const listType = [
    { key: "House", value: "House" },
    { key: "Apartments", value: "Apartments" },
    { key: "Office", value: "Office" },
  ];