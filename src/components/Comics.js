import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Comic from './Comic.js'

function Comics() {

  const [comics, setComics] = useState([]);

  const fetchData = async () => {
    try{
      let response = await axios.get('http://terrybro61.eu.pythonanywhere.com/comics/');
      setComics(response.data);
    } catch(error) {
      console.log("error", error);
    }
  }

  useEffect(() => {   
    fetchData();
    }, []);

    return (
      <div>
        {
          comics.map((comic, i) => {
            return (
              <Comic
                key={i}
                name={comic.name} 
                description={comic.description} 
                cover={comic.cover}
                price={comic.price}
              />
            )
          })  
        }
        
      </div>
    ) 
}

export default Comics;