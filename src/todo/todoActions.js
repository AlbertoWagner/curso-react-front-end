import axios from 'axios'
import $ from 'jquery'; 

const URL = 'http://localhost:3080/api/todos'


export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = (description) => {
    const search = description ?  `&description__regex=/${description}/` : ''
    const resquest = axios.get(`${URL}?sort=-createdAt${search}`)
    return {
        type: 'TODO_SEARCHED',
        payload: resquest
    }
}

export const add = (description) => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch({ type: 'TODO_ADD', payload: resp.data }))
            .then(resp => dispatch(search()))
    }

}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => dispatch({ type: 'TODO_MARKED_AS_DONE', payload: resp.data }))
            .then(resp => dispatch(search( $(description).val())))
    }
}

export const markAsPending= (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
         .then(resp => dispatch(search( $(description).val())))
    }
}

export const handleRemove= (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
         .then(resp => dispatch(search( $(description).val())))
    }
}

export const clear = () =>{
    return [{ type: 'TODO_CLEAR',payload:''}, search()]
}