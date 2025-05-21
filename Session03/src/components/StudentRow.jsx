import React from "react";

export default function StudentRow({ student, index }) {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{student.studentCode}</td>
            <td>{student.studentName}</td>
            <td>{student.age}</td>
            <td>{student.gender}</td>
            <td>
                <div className="template-demo">
                    <button className="btn btn-danger btn-icon-text">
                        Xem
                    </button>
                    <button className="btn btn-warning btn-icon-text">
                        Sửa
                    </button>
                    <button className="btn btn-success btn-icon-text">
                        Xóa
                    </button>
                </div>
            </td>
        </tr>
    );
}
