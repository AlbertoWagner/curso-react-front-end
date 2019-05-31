import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import styles  from '../template/Custom.css'

import React from 'react'
import Menu from '../template/menu'

import Rautes from '../main/rautes'

export default props => (
    <div className='container' style={styles}>
        <Menu />
        <Rautes />
    </div>
)