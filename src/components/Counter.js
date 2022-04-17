import React from 'react'

export default function Counter({ id, value, decrement, increment }) {

    return (
        <div>
            <button onClick={() => decrement(id)}>-</button>
            <span>{value}</span>
            <button onClick={() => increment(id)}>+</button>
        </div>
    )
}
