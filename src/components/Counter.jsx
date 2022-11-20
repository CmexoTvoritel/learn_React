import React, { useState } from 'react';

const Counter = function () {
    const[count, setCount] = useState(0)

    const onClickMinus = () => {
        setCount(count - 1);
    };

    const onClickPlus = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>Счетчик:</h2>
            <h1>{count}</h1>
            <button onClick={onClickMinus} className='minus'>- Минус</button>
            <button onClick={onClickPlus} className='plus'>Плюс +</button>
        </div>
    )
}

export default Counter;