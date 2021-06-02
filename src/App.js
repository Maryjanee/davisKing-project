import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Home from './pages';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  li{
    list-style:none;
  }

  a{
    text-decoration:none;
    display:block;
  }
  .featuredBtn {
    margin-left:auto;
    margin-right:2rem;
  }

  .footer-section{
    padding:2rem 0;
  }

  `
const App = () => {
  return (
    <BrowserRouter>
    <GlobalStyle/>
        <Home/>
    </BrowserRouter>
  )
}

export default App
