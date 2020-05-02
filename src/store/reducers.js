import * as t from './actions'


const data =
{
    employees: []
}

export default function reducer(state = data, action) {
    const { type, payload } = action
    switch (type) {
        case t.SET_EMPLOYEES:
            return { ...state, employees: payload }
        default:
            return state
    }
}