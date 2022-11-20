import React from 'react';

function App() {
  const[count, setCount] = React.useState(0);
  const[some_text, setValue] = React.useState('Enter the text into the output');

  const onClickPlus = () => {
    setCount(count + 1);
  };

  const onClickMinus = () => {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={onClickMinus} className='minus'>- Минус</button>
        <button onClick={onClickPlus} className='plus'>Плюс +</button>
        <br></br>
        <h1>{some_text}</h1>
        <input 
          type="text" value={some_text}
          onChange={event => setValue(event.target.value)}
        />
        
      </div>
    </div>
  );
}

export default App;
