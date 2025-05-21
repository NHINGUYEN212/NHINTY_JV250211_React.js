import React, { useState } from 'react'
import './UserForm.css'

export default function UserForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleAgeChange = (e) => setAge(e.target.value);

    const handleSubmit = (e) => {
        e.prevenDefault();

        const userData = { name, email, age };
        console.log("user", userData);
    } 
  return (
    <div className='form-wrapper'>
        <h2>Thông tin người dùng</h2>
        <form onSubmit={handleSubmit} className='form' >
            <label htmlFor='name' className='name'>Họ và tên </label>
            <input id='name' onChange={handleNameChange} value={name} type="text" placeholder='Nhập họ tên' />
            <label htmlFor='email' className='email'>Email</label>
            <input id='email' onChange={handleEmailChange} value={email} type="email" placeholder='Nhập email' />
            <label htmlFor='age' className='age'>Tuổi</label>
            <input id='age' onChange={handleAgeChange} value={age} type="number" placeholder='Nhập tuổi' />
            <button className='submit-btn' type='submit'>Gửi</button>
        </form>
</div>
  )
}
