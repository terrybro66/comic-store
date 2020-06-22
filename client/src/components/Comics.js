import React,{useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Comic from './Comic.js';
import Search from './Search';
import comicsApi from '../utils/api/comics';
import Pagination from './Pagination';
import Loading from './Loading';
import axios from 'axios'

function Comics() {

  const [comics, setComics] = useState([]);
  const [pages, setPages] = useState({});
  const [isComics, setIsComics] = useState(true)
  const [searchString, setSearchString] = useState("");

  const fetchData = async (page) => {
    let api = comicsApi + '?page=' + page;
    try{
      let response = await axios.get(api);
      setComics(response.data.results);
      setPages(response.data);
     
    } catch(error) {
      console.log("error", error);
    }
  }

  useEffect(() => {   
    fetchData(1);
    setIsComics(false)
  }, []);

  const setPage = (page) => {
    fetchData(page)
  };

  return (
    <div>
    {isComics ? (
      <Loading/>
    ) : (
      <Fragment>
        <Search/>
        <Comic comics = {comics}/>
        <Pagination comics={pages.count} page={setPage}/>
      </Fragment>
      )
    } 
    </div>
  ) 
}

export default Comics;