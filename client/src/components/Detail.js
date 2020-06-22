import React from 'react';
import { useState, useEffect } from 'react';
import comicsApi from '../utils/api/comics'
import axios from 'axios'

const Detail = ({ match }) => {

    useEffect(() => {   
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    
    const [comic, setComic] = useState({});

    const fetchData = async () => {
        try{
          let response = await axios.get(comicsApi + match.params.id);
          setComic(response.data);

        } catch(error) {
          console.log("error", error);
        }
    }

    return (
      <div>
        <h1><img src={comic.cover} alt="cover" /></h1>

      </div>
    )
}

export default Detail;

