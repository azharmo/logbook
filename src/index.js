import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Components/Main'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import './custom/style.css'
import {BrowserRouter} from 'react-router-dom'


ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'))


