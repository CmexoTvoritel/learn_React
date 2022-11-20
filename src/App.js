import React from 'react';
import Counter from './components/Counter';

function App() {
  const[some_text, setValue] = React.useState('Enter the text into the output');
  
  return (
    <div className="App">
      <div>
        <Counter/>
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
