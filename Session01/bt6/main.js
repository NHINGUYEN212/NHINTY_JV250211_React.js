// tao mang danh sach hoc vien

let students = [
    { id: 1, name: "Nguyen Van A", age: 20, email: "nguyenvana@gmail.com" },
    { id: 2, name: "Tran Thi B", age: 21, email: "tranthib@gmail.com" },
    { id: 3, name: "Le Van C", age: 22, email: "levanc@gmail.com" },
];

// tao ham hien thi danh sach hoc vien

function displayStudents() {
    console.log("Danh sách học viên:");
    students.forEach((student) => {
        console.log(
            `ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Email: ${student.email}`
        );
    });
}

// tao ham them hoc vien moi

function addStudent(newStudent) {
    const exists = students.some((student) => student.id === newStudent.id);
    if (exists) {
        console.log(`ID ${newStudent.id} đã tồn tại. Vui lòng chọn ID khác.`);
        return;
    }
    students.push(newStudent);
    console.log("Đã thêm học viên:", newStudent);
    displayStudents();
}

// tao ham xoa hoc vien theo id

function deleteStudent(id) {
    const index = students.findIndex((student) => student.id === id);
    if (index !== -1) {
        const removed = students.splice(index, 1);
        console.log("Đã xoá học viên:", removed[0]);
    } else {
        console.log("Không tìm thấy học viên với ID:", id);
    }
    displayStudents();
}

// tao ham tim theo ten

function searchStudentByName(name) {
    const result = students.filter((student) =>
        student.name.toLowerCase().includes(name.toLowerCase())
    );
    if (result.length) {
        console.log("Kết quả tìm kiếm:");
        result.forEach((student) => {
            console.log(
                `ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Email: ${student.email}`
            );
        });
    } else {
        console.log("Không tìm thấy học viên nào có tên:", name);
    }
}

//   tao ham cap nhat thong tin hoc vien theo id

function updateStudent(id, newData) {
    const student = students.find((student) => student.id === id);
    if (student) {
        student.name = newData.name || student.name;
        student.age = newData.age || student.age;
        student.email = newData.email || student.email;
        console.log("Đã cập nhật học viên:", student);
    } else {
        console.log("Không tìm thấy học viên với ID:", id);
    }
    displayStudents();
}

// ====================vi du =============================

displayStudents();

addStudent({ id: 4, name: "Pham Thi D", age: 25, email: "phamthid@gmail.com" });

deleteStudent(1);

searchStudentByName("van");

updateStudent(3, { name: "Le Van C", age: 22, email: "xyz@gmail.com" });
