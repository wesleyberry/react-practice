import React from 'react'

export default function Button3({ dispatch, action }) {
    return (
        <button onClick={() => dispatch(action)}>{action}</button>
    )
}
