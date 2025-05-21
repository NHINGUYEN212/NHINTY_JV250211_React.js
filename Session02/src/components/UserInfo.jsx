import React from 'react'

export default function UserInfo() {
    const user = {
        username: "Nguyễn Văn A",
        gender: "Nam",
        birthday: "06/03/2024",
        email: "nva@gmail.com",
        address: "Thanh Xuân, Hà Nội"
    }
  return (
    <>
        <h2>Thông tin cá nhân</h2>
        <ul>
            <li>Họ và tên: <b>{user.username}</b></li>
            <li>Giới tính: <b>{user.gender}</b></li>
            <li>Ngày sinh: <b>{user.birthday}</b></li>
            <li>Email: <b>{user.email}</b></li>
            <li>Địa chỉ: <b>{user.address}</b></li>
        </ul>
    </>
  )
}
