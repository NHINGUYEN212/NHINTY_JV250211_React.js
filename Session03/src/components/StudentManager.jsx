import React from 'react'
import StudentTable from "./StudentTable";
import StudentForm from "./StudentForm";
import StudentControls from "./StudentControls";
import './StudentManager.css'

const students = [
  { id: 1, studentCode: "SV001", studentName: "Nguyễn Văn A", age: 20, gender: "Nam" },
  { id: 2, studentCode: "SV002", studentName: "Nguyễn Văn B", age: 21, gender: "Nữ" },
  { id: 3, studentCode: "SV003", studentName: "Nguyễn Văn C", age: 19, gender: "Nam" },
];

export default function StudentManager() {
  return (
    <div className="row">
      <div className="col-lg-7 grid-margin stretch-card">
        <div className="card">
          <StudentControls />
          <StudentTable students={students} />
        </div>
      </div>
      <div className="col-5 grid-margin">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Thông tin sinh viên</h3>
            <StudentForm />
          </div>
        </div>
      </div>
    </div>
  );
}
