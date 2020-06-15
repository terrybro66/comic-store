import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Detail = ({ match }) => {

    useEffect(() => {   
        fetchData();
      }, []);
    
    const [comic, setComic] = useState({});

    const fetchData = async () => {
        try{
          let response = await axios.get(`https://terrybro61.eu.pythonanywhere.com/comics/${match.params.id}`);
          setComic(response.data);
        } catch(error) {
          console.log("error", error);
        }
    }


    return (
        <h1><img src={comic.cover} /></h1>
    )
}

export default Detail;