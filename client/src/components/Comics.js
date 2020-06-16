import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Comic from './Comic.js';
import Search from './Search'

function Comics() {

  const [comics, setComics] = useState([]);
  const [searchString, setSearchString] = useState("");

  const fetchData = async () => {
    try{
      let response = await axios.get('https://terrybro61.eu.pythonanywhere.com/comics/');
      setComics(response.data);
    } catch(error) {
      console.log("error", error);
    }
  }

  useEffect(() => {   
    fetchData();
  }, []);

  const searchChange = name => {
    setSearchString(name)
  }

  return (
    <div>
      <Search searchText={searchString} filter={searchChange}/>
      {
        comics.filter(comic => comic.name.toLowerCase().includes(searchString.toLowerCase())).map((comic, i) => {
          return (
            <Link to={`/${comic.id}`}>
              <Comic
                key={comic.id}
                name={comic.name} 
                description={comic.description} 
                cover={comic.cover}
                price={comic.price}
              />
            </Link>
          )
        })  
      }
      
    </div>
  ) 
}

export default Comics;