import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'
import React from 'react'
import Menu from '../template/menu'
import Rautes from '../main/rautes'

export default props => (
    <div className='container'>
        <Menu />
        <Rautes />
    </div>
)