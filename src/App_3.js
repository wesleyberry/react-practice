import React, { useReducer } from 'react'
import Button3 from './components/Button3'

const ACTIONS = {
    DECREMENT: '-',
    INCREMENT: '+',
    MULTIPLY: '*',
    DIVIDE: '/'
}

export default function App_3() {

    function reducer(state, action) {
        switch(action) {
            case '-':
                return state - 1
            case '+':
                return state + 1
            case '*':
                return state * state
            case '/':
                return state / 2
            default:
                return state
        }
    }

    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <>
            <Button3 dispatch={dispatch} action={ACTIONS.DIVIDE}/>
            <Button3 dispatch={dispatch} action={ACTIONS.DECREMENT}/>
            <span>{ count }</span>
            <Button3 dispatch={dispatch} action={ACTIONS.INCREMENT}/>
            <Button3 dispatch={dispatch} action={ACTIONS.MULTIPLY}/>
        </>
    )
}
