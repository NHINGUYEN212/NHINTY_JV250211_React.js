import React from 'react'
import "./UsersList.css"
export default function UsersList() {
    const users = [
        {
          id: 1,
          userName: 'Malcolm Lockyer',
          dateOfBirth: '21/03/1961',
          gender: 'Nam',
          address: 'New york',
        },
        {
          id: 2,
          userName: 'Maria',
          dateOfBirth: '11/02/1990',
          gender: 'Nữ',
          address: 'London',
        }
      ];
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Ngày sinh</th>
            <th>Giới tính</th>
            <th>Địa chỉ</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.userName}</td>
              <td>{user.dateOfBirth}</td>
              <td>{user.gender}</td>
              <td>{user.address}</td>
              <td>
                <button className="btn-edit">Sửa</button>
                <button className="btn-delete">Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
