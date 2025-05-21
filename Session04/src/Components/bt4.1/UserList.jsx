import React from 'react'
import CardUser from './CardUser';
import "./UserList.css"

export default function UserList() {
    const users = [
        {
            id: 1,
            name: "Nguyễn Văn A",
            age: 21,
            avatar: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            id: 2,
            name: "Trần Thị B",
            age: 22,
            avatar: "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
            id: 3,
            name: "Lê Văn C",
            age: 23,
            avatar: "https://randomuser.me/api/portraits/men/3.jpg"
        }
    ];
  return (
    <div className='user-list-container'>
            <h2 className='userList'>Danh sách người dùng</h2>
            <div className="list">
                {users.map((user) => (
                    <CardUser key={user.id} name={user.name} age={user.age} avatar={user.avatar} />
                ))}
            </div>
    </div>
  )
}
