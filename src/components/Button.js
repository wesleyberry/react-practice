import React, { useState } from 'react';

const Button = ({ textDecoration, color }) => {
    const [counter, setCounter] = useState(0);
    return (
        <button onClick={() => setCounter(c => c + 1)}
            style={{ textDecoration, color }}
        >
            Click me to increment {counter}
        </button>
    )
}
export default Button;