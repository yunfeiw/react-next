import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
const useCounter = () => {
    const count = useSelector(state => state.countReducer.count)
    const dispatch = useDispatch()
    const increment = () =>
        dispatch({
            type: 'REDUX/ADD_COUNT',
        })
    const decrement = () =>
        dispatch({
            type: 'REDUX/DELET_COUNT',
        })
    const reset = () =>
        dispatch({
            type: 'REDUX/RESET_COUNT',
        })
    return { count, increment, decrement, reset }
}

const Counter = () => {
    const { count, increment, decrement, reset } = useCounter()
    return (
        <div>
            <h1>
                Count: <span>{count}</span>
            </h1>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter