import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEmployees } from '../store/actions'
import TableEmployee from '../components/TableEmployee'

export default function Employee() {
    const employees = useSelector(state => state.employees)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getEmployees())
    }, [dispatch])
    return (
        <>
            <TableEmployee employees={employees} />
        </>
    )
}