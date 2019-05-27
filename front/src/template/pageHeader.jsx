import React from 'react'

export default props => (
    <header className='page-header'>
        <h2>{props.name} <small>{props.x}</small></h2>
    </header>
)