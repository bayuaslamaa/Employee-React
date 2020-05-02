import React from 'react'
import { Table } from 'react-bootstrap'
import Column from './TableColumn'

export default (props) => {
    const { employees } = props
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee => (<Column key={employee.id} employee={employee} />))
                }

            </tbody>
        </Table>
    )
}
