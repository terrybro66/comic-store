import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Comic from './Comic.js';
import Search from './Search';
import comicsApi from '../utils/api/comics';
import Pagination from './Pagination';

function Comics() {

  const [comics, setComics] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [currPage, setCurrPage] = useState(1);
  const [comicsPerPage, setComicsPerPage] = useState(4)

  const fetchData = async () => {
    try{
      let response = await comicsApi.get();
      setComics(response.data);
    } catch(error) {
      console.log("error", error);
    }
  }

  useEffect(() => {   
    fetchData();
  }, []);

  const indexOfLastComic = currPage * comicsPerPage;
  const indexOfFirstComic = indexOfLastComic - comicsPerPage;
  const currComics = comics.slice(indexOfFirstComic, indexOfLastComic);

 

  const searchChange = name => {
    console.log(name);
    setSearchString(name);
    setComics(comics.filter(comic => comic.name.toLowerCase().includes(name.toLowerCase())))
  };

  const paginate = (pageNumber) => setCurrPage(pageNumber);

  const prevNext = (pageDirection) => {
    pageDirection === ">" ? setCurrPage(currPage+1) : setCurrPage(currPage-1)
  };


  return (
    <div>
      <Search searchText={searchString} filter={searchChange}/>
      {
        currComics.map((comic, i) => {
          return (
            <Link to={`/${comic.id}`} key={comic.id}>
              <Comic             
                name={comic.name} 
                description={comic.description} 
                cover={comic.cover}
                price={comic.price}
              />
            </Link>
          )
        })  
      }
      <Pagination comicsPerPage={comicsPerPage} totalComics={comics.length} paginate={paginate} prevNext={prevNext} current={currPage}/>
      
    </div>
  ) 
}

export default Comics;