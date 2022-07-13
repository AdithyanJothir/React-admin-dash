import React from 'react';
import {useState,useContext} from  'react';
import AuthContext from '../context/AuthContext';


function Login() {
  const {authLogin} = useContext(AuthContext);
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await authLogin(username,password);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" onChange={e => {setUsername(e.target.value)}}></input>
        <input type="password" placeholder="Password" onChange={e => {setPassword(e.target.value)}}></input>
        <input type="submit" value="Login"></input>
      </form>
    </div>
  )
}

export default Login