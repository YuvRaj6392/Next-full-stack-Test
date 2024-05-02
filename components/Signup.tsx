"use client"


import axios from 'axios';
import React, { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router=useRouter()

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };


  const handleSubmit = async () => {
   const response = await axios.post("http://localhost:3000/api/user", {
    username,
    password
});

  router.push('/')

  };

  return (
    <div className='border border-gray-600 flex justify-center items-center h-screen'>
      <div className='w-[60%] h-[60%] bg-slate-500 flex justify-center items-center gap-10'>
        <input type="text" placeholder='username' value={username} onChange={handleUsernameChange} />
        <input type="password" placeholder='password' value={password} onChange={handlePasswordChange} />
        <button type='button' className='bg-red-500 p-2' onClick={handleSubmit}>Signup</button>
      </div>
    </div>
  );
}
