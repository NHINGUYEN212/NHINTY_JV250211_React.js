import React from "react";
import { Button, Table } from "react-bootstrap";

export default function LearnTable() {
    return (
        <div className="text-center mt-10">
            <h2 className="mb-4">Table</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Stt</th>
                        <th>Họ và tên</th>
                        <th>Giới tính</th>
                        <th>Ngày sinh</th>
                        <th>Email</th>
                        <th>Địa chỉ</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Văn A</td>
                        <td>Nam</td>
                        <td>1/1/1999</td>
                        <td>nguyenvana@gmail.com</td>
                        <td>Hà nội</td>
                        <td className="d-flex gap-2 justify-content-center">
                            <Button variant="warning">Sửa</Button>
                            <Button variant="danger">Xóa</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Trần Thị B</td>
                        <td>Nữ</td>
                        <td>2/2/1995</td>
                        <td>tranthib@gmail.com</td>
                        <td>Hà nội</td>
                        <td className="d-flex gap-2 justify-content-center">
                            <Button variant="warning">Sửa</Button>
                            <Button variant="danger">Xóa</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Phan Văn C</td>
                        <td>Nam</td>
                        <td>3/3/1992</td>
                        <td>phanvanc@gmail.com</td>
                        <td>Đà Nẵng</td>
                        <td className="d-flex gap-2 justify-content-center">
                            <Button variant="warning">Sửa</Button>
                            <Button variant="danger">Xóa</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Lê Thị D</td>
                        <td>Nư</td>
                        <td>4/4/1993</td>
                        <td>lethid@gmail.com</td>
                        <td>Hải Phòng</td>
                        <td className="d-flex gap-2 justify-content-center">
                            <Button variant="warning">Sửa</Button>
                            <Button variant="danger">Xóa</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Nguyễn Văn A</td>
                        <td>Nam</td>
                        <td>5/5/1991</td>
                        <td>nguyenvane@gmail.com</td>
                        <td>Cần Thơ</td>
                        <td className="d-flex gap-2 justify-content-center">
                            <Button variant="warning">Sửa</Button>
                            <Button variant="danger">Xóa</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}
