import logo from './logo.svg';
import './App.css';

import React, {useEffect, useState} from 'react';
import axios from "axios";

function App() {

  const [lists, setList] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    // 데이터베이스에 있는 값을 가져온다.
    axios.get('/api/values').then(
      response => {
        console.log('response', response.data);
        setList(response.data);
      });
  }, []);

  const changeHandler = (event) => {
    setValue(event.currentTarget.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    axios.post('/api/value', {value}).then( response => {
      if (response.data.success) {
        console.log('response.data',response.data);
        setList([...lists,response.data]);
        setValue("");
      } else {
        alert('저장 실패');
      }
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <form className="example" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="입력해주세요.."
              onChange={changeHandler}
              value={value}
            />
            <button type="submit">확인</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
