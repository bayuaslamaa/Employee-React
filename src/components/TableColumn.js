import React from 'react'

export default (props) => {
    const { employee } = props

    return (
        <tr>
            <td>{employee.id}</td>
            <td>{employee.first_name}</td>
            <td>{employee.last_name}</td>
            <td>{employee.email}</td>
        </tr>
    )
}