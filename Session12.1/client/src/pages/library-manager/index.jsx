import {
    Button,
    Form,
    Input,
    message,
    Modal,
    Pagination,
    Space,
    Table,
    Tag,
    Dropdown,
    Select,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useDebounce from "../../hooks/useDebounce";
import { formatDate } from "../../utils/formatDate";
import {
    fetchLibraries,
    deleteLibrary,
    createLibrary,
    updateLibrary,
    setSearchTerm,
    setCurrentPage,
    setPageSize,
    setFilterStatus,
} from "../../features/library/librarySlice";

export default function LibraryManager() {
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const {
        items: libraries,
        status,
        currentPage,
        pageSize,
        totalRecord,
        searchTerm,
        filterStatus,
    } = useSelector((state) => state.library);

    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [baseId, setBaseId] = useState(null);
    const [isShowModalAdd, setIsShowModalAdd] = useState(false);
    const [libraryInfo, setLibraryInfo] = useState(null);

    useEffect(() => {
        form.setFieldsValue(libraryInfo);
    }, [libraryInfo, form]);

    const debouceSearchValue = useDebounce(searchTerm, 300);

    useEffect(() => {
        dispatch(
            fetchLibraries({
                searchValue: debouceSearchValue,
                currentPage,
                pageSize,
                filterStatus,
            })
        );
    }, [dispatch, debouceSearchValue, currentPage, pageSize, filterStatus]);

    const handleStatusChange = async (record, newStatus) => {
        if (record.status !== newStatus) {
            try {
                await dispatch(
                    updateLibrary({
                        id: record.id,
                        libraryData: { status: newStatus },
                    })
                ).unwrap();
                message.success("Cập nhật trạng thái thành công");
            } catch (error) {
                message.error("Cập nhật trạng thái thất bại");
            }
        }
    };

    const handleShowModalDelete = (id) => {
        setIsShowModalDelete(true);
        setBaseId(id);
    };

    const handleCloseModalDelete = () => {
        setIsShowModalDelete(false);
        setBaseId(null);
    };

    const handleDelete = async () => {
        try {
            await dispatch(deleteLibrary(baseId)).unwrap();
            message.success("Xóa thông tin thư viện thành công");
            handleCloseModalDelete();
        } catch (error) {
            message.error("Xóa thông tin thư viện thất bại");
        }
    };

    const handleChangeInput = (event) => {
        dispatch(setSearchTerm(event.target.value));
    };

    const handleShowModalAdd = () => setIsShowModalAdd(true);
    const handleCloseModalAdd = () => {
        setIsShowModalAdd(false);
        setLibraryInfo(null);
        setBaseId(null);
        form.resetFields();
    };

    const handleCreateLibrary = async (values) => {
        try {
            if (libraryInfo) {
                await dispatch(
                    updateLibrary({ id: baseId, libraryData: values })
                ).unwrap();
            } else {
                const newLibrary = {
                    ...values,
                    status: 0,
                    createdAt: new Date(),
                };
                await dispatch(createLibrary(newLibrary)).unwrap();
            }
            message.success(
                `${libraryInfo ? "Cập nhật" : "Thêm mới"} thành công`
            );
            handleCloseModalAdd();
            dispatch(
                fetchLibraries({
                    searchValue: debouceSearchValue,
                    currentPage,
                    pageSize,
                    filterStatus,
                })
            );
        } catch (error) {
            message.error(`${libraryInfo ? "Cập nhật" : "Thêm mới"} thất bại`);
        }
    };

    const handleChangePage = (page, size) => {
        dispatch(setCurrentPage(page));

        if (size !== pageSize) {
            dispatch(setPageSize(size));
        }
    };
    const handleGetInfo = (info) => {
        handleShowModalAdd();
        setLibraryInfo(info);
        setBaseId(info.id);
    };

    const columns = [
        {
            title: "STT",
            dataIndex: "id",
            key: "id",
            render: (text, record, index) =>
                (currentPage - 1) * pageSize + index + 1,
        },
        { title: "Tên sách", dataIndex: "bookName", key: "bookName" },
        {
            title: "Sinh viên mượn",
            dataIndex: "studentName",
            key: "studentName",
        },
        {
            title: "Ngày mượn",
            dataIndex: "borrowedDay",
            key: "borrowedDay",
            render: (record) => formatDate(record),
        },
        {
            title: "Ngày trả",
            dataIndex: "paymentDate",
            key: "paymentDate",
            render: (record) => formatDate(record),
        },

        {
            title: "Trạng thái",
            key: "status",
            dataIndex: "status",
            render: (status, record) => {
                const menuItems = [
                    {
                        key: "1",
                        label: <span style={{ color: "#52c41a" }}>Đã trả</span>,
                    },
                    {
                        key: "0",
                        label: (
                            <span style={{ color: "#ff4d4f" }}>Chưa trả</span>
                        ),
                    },
                ];

                const triggerNode = (
                    <a
                        onClick={(e) => e.preventDefault()}
                        style={{
                            display: "inline-block",
                            textDecoration: "none",
                        }}
                    >
                        {status === 1 ? (
                            <Tag
                                color="green"
                                style={{
                                    minWidth: "100px",
                                    padding: "4px 12px",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    cursor: "pointer",
                                }}
                            >
                                Đã trả{" "}
                                <DownOutlined style={{ fontSize: "10px" }} />
                            </Tag>
                        ) : (
                            <Tag
                                color="red"
                                style={{
                                    minWidth: "100px",
                                    padding: "4px 12px",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    cursor: "pointer",
                                }}
                            >
                                Chưa trả{" "}
                                <DownOutlined style={{ fontSize: "10px" }} />
                            </Tag>
                        )}
                    </a>
                );

                return (
                    <Dropdown
                        menu={{
                            items: menuItems,
                            onClick: ({ key }) =>
                                handleStatusChange(record, parseInt(key)),
                        }}
                        trigger={["click"]}
                    >
                        {triggerNode}
                    </Dropdown>
                );
            },
        },

        {
            title: "Hành động",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <Button
                        style={{
                            backgroundColor: "orange",
                            borderColor: "orange",
                            color: "white",
                        }}
                        onClick={() => handleGetInfo(record)}
                        size="medium"
                    >
                        Sửa
                    </Button>
                    <Button
                        type="primary"
                        danger
                        onClick={() => handleShowModalDelete(record.id)}
                        size="medium"
                    >
                        Xóa
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <>
            <Modal
                onOk={handleDelete}
                onCancel={handleCloseModalDelete}
                title="Xác nhận xóa"
                okText="Xóa"
                cancelText="Hủy"
                open={isShowModalDelete}
            >
                <h3>Bạn có chắc chắn muốn xóa thông tin này?</h3>
            </Modal>

            <Modal
                footer={null}
                title={`${
                    libraryInfo ? "Cập nhật" : "Thêm mới"
                } thông tin mượn sách`}
                open={isShowModalAdd}
                onCancel={handleCloseModalAdd}
            >
                <Form
                    form={form}
                    name="formLibrary"
                    initialValues={{ remember: true }}
                    onFinish={handleCreateLibrary}
                    autoComplete="off"
                    layout="vertical"
                >
                    <Form.Item
                        label="Tên sách"
                        name="bookName"
                        rules={[
                            {
                                required: true,
                                message: "Tên sách không được để trống",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Tên người mượn"
                        name="studentName"
                        rules={[
                            {
                                required: true,
                                message: "Tên người mượn không được để trống",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Ngày mượn"
                        name="borrowedDay"
                        rules={[
                            {
                                required: true,
                                message: "Ngày mượn không được để trống",
                            },
                        ]}
                    >
                        <Input type="date" />
                    </Form.Item>
                    <Form.Item
                        label="Ngày trả"
                        name="paymentDate"
                        rules={[
                            {
                                required: true,
                                message: "Ngày trả không được để trống",
                            },
                        ]}
                    >
                        <Input type="date" />
                    </Form.Item>
                    <Form.Item label={null}>
                        <div className="flex justify-end gap-2">
                            <Button
                                onClick={handleCloseModalAdd}
                                htmlType="button"
                            >
                                Hủy
                            </Button>
                            <Button type="primary" htmlType="submit">
                                {libraryInfo ? "Lưu" : "Thêm"}
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </Modal>

            <div className="flex justify-center mt-[50px]">
                <div className="w-[80%]">
                    <div className="flex items-center justify-between mb-5">
                        <h3 className="font-semibold text-[24px]">
                            Quản lý mượn trả sách
                        </h3>
                        <Button onClick={handleShowModalAdd} type="primary">
                            Thêm thông tin
                        </Button>
                    </div>

                    <div className="flex justify-between mb-4">
                        <Input
                            value={searchTerm}
                            onChange={handleChangeInput}
                            placeholder="Tìm kiếm theo tên sách..."
                            style={{ width: 300 }}
                        />
                        <Select
                            value={filterStatus}
                            style={{ width: 180 }}
                            onChange={(value) =>
                                dispatch(setFilterStatus(value))
                            }
                        >
                            <Select.Option value="all">
                                Tất cả trạng thái
                            </Select.Option>
                            <Select.Option value={0}>Chưa trả</Select.Option>
                            <Select.Option value={1}>Đã trả</Select.Option>
                        </Select>
                    </div>

                    <div className="my-5">
                        <Table
                            loading={status === "loading"}
                            rowKey={"id"}
                            columns={columns}
                            dataSource={libraries || []}
                            pagination={false}
                            onRow={(record) => ({
                                onDoubleClick: () => handleGetInfo(record),
                            })}
                        />
                    </div>
                    <div className="flex justify-end">
                        <Pagination
                            showSizeChanger
                            onChange={handleChangePage}
                            current={currentPage}
                            pageSize={pageSize}
                            total={totalRecord}
                            showTotal={(total) => `Tổng ${total} bản ghi`}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
