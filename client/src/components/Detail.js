import React from 'react';
import { useState, useEffect } from 'react';
import comicsApi from '../utils/api/comics'

const Detail = ({ match }) => {

    useEffect(() => {   
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    
    const [comic, setComic] = useState({});

    const fetchData = async () => {
        try{
          let response = await comicsApi.get(match.params.id);
          setComic(response.data);
        } catch(error) {
          console.log("error", error);
        }
    }


    return (
        <h1><img src={comic.cover} alt="cover" /></h1>
    )
}

export default Detail;