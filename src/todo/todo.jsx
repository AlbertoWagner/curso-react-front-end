import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoLits from '../todo/todoList'

const URL = 'http://localhost:3080/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = { description: '', list: [] }
    }
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' x='Cadastro'></PageHeader>
                <TodoForm handleClose={this.handleClose} handleSearch={this.handleSearch} description={this.state.description} handleAdd={this.handleAdd}
                    handleChange={this.handleChange} />
                <TodoLits handleMarkAsDone={this.handleMarkAsDone} handleMarkAsPending={this.handleMarkAsPending} handleRemove={this.handleRemove}  />
            </div>
        )
    }
}