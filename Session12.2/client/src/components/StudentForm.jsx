import { useEffect } from "react";
import { Form, Input, Button, Row, Col, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, updateStudent } from "../redux/studentsSlice";

export default function StudentForm({ editingStudent, onFinish }) {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const students = useSelector((state) => state.students.list);

    useEffect(() => {
        if (editingStudent) {
            form.setFieldsValue(editingStudent);
        } else {
            form.resetFields();
        }
    }, [editingStudent, form]);

    const handleSubmit = (values) => {
        const studentCodeExists = students.some(
            (student) =>
                student.studentCode === values.studentCode &&
                student.id !== (editingStudent ? editingStudent.id : undefined)
        );

        if (studentCodeExists) {
            message.error("Mã sinh viên đã tồn tại!");
            return;
        }

        if (editingStudent) {
            dispatch(updateStudent({ ...editingStudent, ...values }));
            message.success("Cập nhật sinh viên thành công!");
        } else {
            dispatch(addStudent({ ...values, id: Date.now().toString() }));
            message.success("Thêm sinh viên thành công!");
        }
        form.resetFields();
        if (onFinish) onFinish();
    };

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Row gutter={16}>
                <Col span={8}>
                    <Form.Item
                        name="fullName"
                        label="Full Name"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập họ tên!",
                            },
                        ]}
                    >
                        <Input placeholder="Nhập họ và tên" />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        name="studentCode"
                        label="Student Code"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập mã sinh viên!",
                            },
                        ]}
                    >
                        <Input placeholder="Nhập mã sinh viên" />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        name="class"
                        label="Class"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập lớp học!",
                            },
                        ]}
                    >
                        <Input placeholder="Nhập lớp học" />
                    </Form.Item>
                </Col>
            </Row>
            <Row justify="end">
                <Button type="primary" htmlType="submit">
                    {editingStudent ? "Update Student" : "+ Add Student"}
                </Button>
                {editingStudent && (
                    <Button
                        style={{ marginLeft: "8px" }}
                        onClick={() => {
                            form.resetFields();
                            if (onFinish) onFinish();
                        }}
                    >
                        Cancel
                    </Button>
                )}
            </Row>
        </Form>
    );
}
