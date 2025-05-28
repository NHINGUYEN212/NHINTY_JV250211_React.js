import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Layout, Typography, Divider } from "antd";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import { fetchStudents } from "./redux/studentsSlice";

const { Header, Content } = Layout;
const { Title } = Typography;

export default function App() {
    const dispatch = useDispatch();
    const [editingStudent, setEditingStudent] = useState(null);

    useEffect(() => {
        dispatch(fetchStudents());
    }, [dispatch]);

    const handleEdit = (student) => {
        setEditingStudent(student);
    };

    const clearEditing = () => {
        setEditingStudent(null);
    };

    return (
        <Layout>
            <Header
                style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "white",
                    justifyContent: "center",
                }}
            >
                <Title level={3} style={{ margin: 0 }}>
                    Student Management System
                </Title>
            </Header>
            <Content
                style={{ padding: "20px 50px", backgroundColor: "#f0f2f5" }}
            >
                <div
                    style={{
                        background: "#fff",
                        padding: 24,
                        minHeight: 280,
                        borderRadius: "8px",
                    }}
                >
                    <StudentForm
                        editingStudent={editingStudent}
                        onFinish={clearEditing}
                    />
                    <Divider />
                    <StudentList onEdit={handleEdit} />
                </div>
            </Content>
        </Layout>
    );
}
