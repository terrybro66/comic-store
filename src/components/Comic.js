import React from 'react';
import {
    Card
  } from './styledComponents'

const Comic = ({ name, description, cover, price}) => {
  return (
    <Card>
        <img alt='cover' src={cover} width="180px"/>        
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{'\u00A3'}{price}</p>
    </Card>
  );
}

export default Comic;