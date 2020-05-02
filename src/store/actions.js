import axios from "axios"


export const SET_EMPLOYEES = 'SET_EMPLOYEES'


export const setEmployees = (data) => {
    return { type: SET_EMPLOYEES, payload: data }
}

function fetchEmployees() {
    return axios.get('http://localhost:3000/employees')
}

export const getEmployees = () => {
    return dispatch => {
        fetchEmployees()
            .then(({ data }) => dispatch(setEmployees(data)))
            .catch(console.log)
    }
}