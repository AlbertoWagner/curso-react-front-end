import axios from 'axios'

const URL = 'http://localhost:3080/api/todos'


export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value


})

export const search = () => {
    const resquest  =  axios.get(`${URL}?sort=-createdAt`)
    return{
        type : 'TODO_SEARCHED',
        payload : resquest
    }

}