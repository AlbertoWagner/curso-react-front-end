import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoLits from '../todo/todoList'

const URL = 'http://localhost:3080/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.state = { description: '', list: [] }
        this.refresh()
    }

    handleClose(){
        this.refresh()

    }

    refresh(description = '') {
        const search = description ?  `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then((resp) => this.setState({ ...this.state, description: description, list: resp.data }))
    }

    handleSearch(){
        this.refresh(this.state.description)
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }
    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description }).then(resp => this.refresh(this.state.description))
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`).then(resp => this.refresh(this.state.description))

    }

    handleMarkAsDone(todo){
        axios.put(`${URL}/${todo._id}`,{...todo,done:true}).then(resp => this.refresh(this.state.description))

    }
    handleMarkAsPending(todo){
        axios.put(`${URL}/${todo._id}`,{...todo,done:false}).then(resp => this.refresh(this.state.description))

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