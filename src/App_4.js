import React, { useState } from 'react'
import Counter from './components/Counter';

export default function App_4() {

    const [data, setData] = useState([
        { id: 0, count: 0},
        { id: 1, count: 0},
        { id: 2, count: 0},
        { id: 3, count: 0}
    ])

    function decrement(id) {
        setData(data.map(datum => id === datum.id ? { ...datum, count: datum.count - 1} : datum))
    }

    function increment(id) {
        setData(data.map(datum => id === datum.id ? { ...datum, count: datum.count + 1} : datum))
    }

    return (
        <>
            {data.map(counter => 
                <Counter 
                    key={counter.id}
                    id={counter.id}
                    value={counter.count}
                    decrement={decrement}
                    increment={increment}
                />
            )}
        </>
    )
}
