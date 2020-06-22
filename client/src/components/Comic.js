import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card
} from './styledComponents'


const Comic = ({comics}) => {
  {console.log(comics)}
  return (
    <div>
      {
        comics.map((comic, i) => {
          return (
            <Card>
              <Link to={`/${comic.id}`} key={comic.id}>          
                <h3>{comic.name} </h3>
                {comic.description} 
                <img src={comic.cover} />
                {comic.price}
              </Link>
            </Card>
          )
        })  
      }
    </div>
  );
}

export default Comic;