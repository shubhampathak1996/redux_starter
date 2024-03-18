import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppSelector } from './redux/hooks';
import { useDispatch } from 'react-redux';
import { decrement, increment } from './redux/slices/counter';
import MyComponent from './components/MyComponent';

function App() {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Count is {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </header>
      <MyComponent />
    </div>
  );
}

export default App;
