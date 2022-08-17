import React, {useEffect, useState, useCallback} from 'react';
import { HomeModule } from '../modules/home';
import { connector } from "@src/services";

const { all } = connector("property/viewStock");

export const Home = ()=> {
    const [list, setList] = useState([]);
  
    const getList = useCallback(
      async () => {
        try {
          const stocks = await all();
          setList(stocks);
        } catch (err) {
          console.error(err);
        }
      },
      [setList]
    );
  
    useEffect(() => {
      getList();
    }, [getList]);

    return <HomeModule list={list}/>
}