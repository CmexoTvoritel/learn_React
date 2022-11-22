import React, { useState } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter'
import './styles/App.css';
import PostItem from './components/PostItem';
import PostList from './components/PostList';

function App() {
  const[some_text, setValue] = React.useState('Enter the text into the output');
  const[posts, setPosts] = useState([
    {id: 1, title: "JavaScript", body: "Description"},
    {id: 2, title: "C++", body: "Description"},
    {id: 3, title: "Java", body: "Description"},
    {id: 4, title: "Python", body: "Description"},
    {id: 5, title: "React", body: "Description"},
  ])
  
  return (
    <div className="App">
      <div>
        <ClassCounter/>
        <br></br>
        <h1>{some_text}</h1>
        <input 
          type="text" value={some_text}
          onChange={event => setValue(event.target.value)}
        />
        
      </div>
      <br></br> <br></br>
      <PostList posts={posts} />
      
    </div>
  );
}

export default App;
