import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Header from './components/Header';
import { createGlobalStyle } from 'styled-components'
import Sidebar from './components/Sidebar';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a{
    text-decoration:none;
    display:block;
  }
  `
const App = () => {
  return (
    <BrowserRouter>
    <GlobalStyle/>
        <Sidebar/>
        <Header/>
    </BrowserRouter>
  )
}

export default App
