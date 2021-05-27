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

  a{
    text-decoration:none;
    display:block;
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
