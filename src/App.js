import React from 'react';
import Comics from './components/Comics'
import SearcBox from './components/SearchBox'
import Head from './components/Head'

import {
  AppBody
} from './components/styledComponents'

function App() {

  return (
    <AppBody>
      <Head />
      <SearcBox />
      <Comics />
    </AppBody>
  ) 
}

export default App;