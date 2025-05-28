import { useEffect, useState } from "react";

import ConfirmBlock from "./components/ConfirmBlock";
import ConfirmDelete from "./components/ConfirmDelete";
import FormStudent from "./components/FormStudent";

const formatDateForDisplay = (dateString) => {
    if (!dateString || !/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
        return dateString;
    }
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
};

export default function App() {
    const [students, setStudents] = useState(() => {
        const storedStudents = localStorage.getItem("students");
        return storedStudents
            ? JSON.parse(storedStudents)
            : [
                  {
                      id: 1,
                      fullName: "Nguyễn Văn A",
                      dateOfBirth: "1990-02-28",
                      email: "nvana@gmail.com",
                      address: "Ba Đình, Hà Nội",
                      status: true,
                  },
                  {
                      id: 2,
                      fullName: "Trần Thị B",
                      dateOfBirth: "1985-07-15",
                      email: "ttb@gmail.com",
                      address: "Cầu Giấy, Hà Nội",
                      status: false,
                  },
                  {
                      id: 3,
                      fullName: "Lê Văn C",
                      dateOfBirth: "2000-10-03",
                      email: "lvc@gmail.com",
                      address: "Hai Bà Trưng, Hà Nội",
                      status: false,
                  },
                  {
                      id: 4,
                      fullName: "Phạm Thị D",
                      dateOfBirth: "1995-05-20",
                      email: "ptd@gmail.com",
                      address: "Hoàn Kiếm, Hà Nội",
                      status: true,
                  },
                  {
                      id: 5,
                      fullName: "Ngô Văn E",
                      dateOfBirth: "1988-11-12",
                      email: "nve@gmail.com",
                      address: "Cầu Giấy, Hà Nội",
                      status: true,
                  },
              ];
    });
    const [selectedId, setSelectedId] = useState(null);
    const [openFormStudent, setOpenFormStudent] = useState(false);
    const [dataEdit, setDataEdit] = useState(null);
    const [formValue, setFormValue] = useState({});
    const [errorFormStudent, setErrorFormStudent] = useState({
        fullName: false,
        dateOfBirth: false,
        email: false,
    });
    const [searchTerm, setSearchTerm] = useState("");

    const handleOpenFormStudent = (id) => {
        if (id) {
            const studentToEdit = students.find((e) => e.id === id);
            setDataEdit(studentToEdit);
            setFormValue(studentToEdit);
        } else {
            setDataEdit(null);
            setFormValue({});
        }
        setOpenFormStudent(true);
        setErrorFormStudent({
            fullName: false,
            dateOfBirth: false,
            email: false,
        });
    };

    const handleCloseFormStudent = () => {
        setOpenFormStudent(false);
        setDataEdit(null);
        setFormValue({});
        setErrorFormStudent({
            fullName: false,
            dateOfBirth: false,
            email: false,
        });
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validate = (name, value) => {
        let hasError = false;
        if (name === "fullName") {
            hasError = !value || value.trim() === "";
        } else if (name === "email") {
            hasError = !value || value.trim() === "" || !validateEmail(value);
        } else if (name === "dateOfBirth") {
            if (!value) {
                hasError = true;
            } else {
                const dateValue = new Date(value);
                const now = new Date();
                now.setHours(0, 0, 0, 0);
                hasError = dateValue.getTime() > now.getTime();
            }
        }
        setErrorFormStudent((prevErrors) => ({
            ...prevErrors,
            [name]: hasError,
        }));
        return hasError;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue((prevValue) => ({
            ...prevValue,
            [name]: value,
        }));
        validate(name, value);
    };

    const handleAdd = () => {
        const hasFullNameError = validate("fullName", formValue.fullName);
        const hasDateError = validate("dateOfBirth", formValue.dateOfBirth);
        const hasEmailError = validate("email", formValue.email);

        if (hasFullNameError || hasDateError || hasEmailError) {
            return;
        }

        let cloneStudents = [...students];
        if (dataEdit) {
            cloneStudents = cloneStudents.map((e) =>
                e.id === dataEdit.id ? { ...formValue, id: dataEdit.id } : e
            );
        } else {
            const newStudent = {
                ...formValue,
                id: new Date().getTime(),
                status: true,
            };
            cloneStudents.push(newStudent);
        }
        setStudents(cloneStudents);
        handleCloseFormStudent();
    };

    const [openConfirmBlock, setOpenConfirmBlock] = useState(false);
    const handleOpenConfirmBlock = (id) => {
        setSelectedId(id);
        setOpenConfirmBlock(true);
    };
    const handleCloseConfirmBlock = () => {
        setOpenConfirmBlock(false);
        setSelectedId(null);
    };

    const handleBlock = () => {
        setStudents(
            students.map((e) =>
                e.id === selectedId ? { ...e, status: !e.status } : e
            )
        );
        handleCloseConfirmBlock();
    };

    const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
    const handleOpenConfirmDelete = (id) => {
        setSelectedId(id);
        setOpenConfirmDelete(true);
    };
    const handleCloseConfirmDelete = () => {
        setOpenConfirmDelete(false);
        setSelectedId(null);
    };

    const handleDelete = () => {
        setStudents(students.filter((e) => e.id !== selectedId));
        handleCloseConfirmDelete();
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleRefresh = () => {
        setSearchTerm("");
    };

    const filteredStudents = students.filter(
        (student) =>
            (student.fullName &&
                student.fullName.toLowerCase().includes(searchTerm)) ||
            (student.email && student.email.toLowerCase().includes(searchTerm))
    );

    useEffect(() => {
        localStorage.setItem("students", JSON.stringify(students));
    }, [students]);

    return (
        <>
            <div className="w-[80%] m-auto mt-4 h-[100vh]">
                <main className="main">
                    <header className="d-flex justify-content-between mb-3">
                        <h3>Nhân viên</h3>
                        <button
                            className="btn btn-primary"
                            onClick={() => handleOpenFormStudent(null)}
                        >
                            Thêm mới nhân viên
                        </button>
                    </header>
                    <div className="d-flex align-items-center justify-content-end gap-2 mb-3">
                        <input
                            value={searchTerm}
                            onChange={handleSearch}
                            style={{ width: 350 }}
                            type="text"
                            className="form-control"
                            placeholder="Tìm kiếm theo tên hoặc email"
                        />
                        <i
                            className="fa-solid fa-arrows-rotate"
                            title="Refresh"
                            onClick={handleRefresh}
                            style={{ cursor: "pointer" }}
                        />
                    </div>
                    <table className="table table-bordered table-hover table-striped">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Họ và tên</th>
                                <th>Ngày sinh</th>
                                <th>Email</th>
                                <th>Địa chỉ</th>
                                <th>Trạng thái</th>
                                <th colSpan={3}>Chức năng</th>{" "}
                            </tr>
                        </thead>
                        <tbody>
                            {filteredStudents.map((value, index) => (
                                <tr key={value.id}>
                                    {" "}
                                    <td>{index + 1}</td>
                                    <td>{value.fullName}</td>
                                    <td>
                                        {formatDateForDisplay(
                                            value.dateOfBirth
                                        )}
                                    </td>{" "}
                                    <td>{value.email}</td>
                                    <td>{value.address}</td>
                                    <td>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 8,
                                            }}
                                        >
                                            <div
                                                className={`status ${
                                                    value.status
                                                        ? "status-active"
                                                        : "status-stop"
                                                }`}
                                            />
                                            <span>
                                                {value.status
                                                    ? "Đang hoạt động"
                                                    : "Ngừng hoạt động"}
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <span
                                            className="button button-block"
                                            onClick={() =>
                                                handleOpenConfirmBlock(value.id)
                                            }
                                        >
                                            {value.status ? "Chặn" : "Bỏ Chặn"}
                                        </span>
                                    </td>
                                    <td>
                                        <span
                                            className="button button-edit"
                                            onClick={() =>
                                                handleOpenFormStudent(value.id)
                                            }
                                        >
                                            Sửa
                                        </span>
                                    </td>
                                    <td>
                                        <span
                                            className="button button-delete"
                                            onClick={() =>
                                                handleOpenConfirmDelete(
                                                    value.id
                                                )
                                            }
                                        >
                                            Xóa
                                        </span>
                                    </td>
                                </tr>
                            ))}
                            {filteredStudents.length === 0 && (
                                <tr>
                                    <td colSpan="8" className="text-center">
                                        Không tìm thấy nhân viên nào.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <footer className="d-flex justify-content-end align-items-center gap-3">
                        <select className="form-select">
                            <option>Hiển thị 10 bản ghi trên trang</option>
                            <option>Hiển thị 20 bản ghi trên trang</option>
                            <option>Hiển thị 50 bản ghi trên trang</option>
                            <option>Hiển thị 100 bản ghi trên trang</option>
                        </select>
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    Previous
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    Next
                                </a>
                            </li>
                        </ul>
                    </footer>
                </main>
            </div>
            <FormStudent
                dataEdit={dataEdit}
                openFormStudent={openFormStudent}
                handleCloseFormStudent={handleCloseFormStudent}
                errorFormStudent={errorFormStudent}
                formValue={formValue}
                handleChange={handleChange}
                handleAdd={handleAdd}
            />
            <ConfirmBlock
                openConfirmBlock={openConfirmBlock}
                handleBlock={handleBlock}
                handleCloseConfirmBlock={handleCloseConfirmBlock}
            />
            <ConfirmDelete
                handleDelete={handleDelete}
                openConfirmDelete={openConfirmDelete}
                handleCloseConfirmDelete={handleCloseConfirmDelete}
            />
        </>
    );
}
