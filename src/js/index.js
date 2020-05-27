import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import Grid from './Grid'

ReactDOM.render((
    <BrowserRouter>
        <Grid/>
    </BrowserRouter>
), document.getElementById('root'))
