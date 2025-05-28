import { useSelector, useDispatch } from "react-redux";
import { List, Card, Button, Popconfirm, message, Typography, Row } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { deleteStudent } from "../redux/studentsSlice";

const { Text, Title } = Typography;

export default function StudentList({ onEdit }) {
    const { list: students, status } = useSelector((state) => state.students);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteStudent(id));
        message.success("Xóa sinh viên thành công!");
    };

    return (
        <div>
            <Row
                justify="space-between"
                align="middle"
                style={{ marginBottom: "20px" }}
            >
                <Title level={4}>Students</Title>
            </Row>
            <List
                loading={status === "loading"}
                grid={{ gutter: 16 }}
                dataSource={students}
                renderItem={(student) => (
                    <List.Item>
                        <Card
                            title={
                                <Title level={5} style={{ color: "#1890ff" }}>
                                    {student.fullName}
                                </Title>
                            }
                            actions={[
                                <Button type="link" icon={<EyeOutlined />}>
                                    View
                                </Button>,
                                <Button
                                    type="default"
                                    icon={<EditOutlined />}
                                    onClick={() => onEdit(student)}
                                >
                                    Edit
                                </Button>,
                                <Popconfirm
                                    title="Xóa sinh viên?"
                                    description="Bạn có chắc chắn muốn xóa sinh viên này?"
                                    onConfirm={() => handleDelete(student.id)}
                                    okText="Yes"
                                    cancelText="No"
                                >
                                    <Button
                                        type="danger"
                                        icon={<DeleteOutlined />}
                                    >
                                        Delete
                                    </Button>
                                </Popconfirm>,
                            ]}
                        >
                            <Text strong>Code:</Text> {student.studentCode}
                            <br />
                            <Text strong>Class:</Text> {student.class}
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    );
}
