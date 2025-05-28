export default function FormStudent({
    dataEdit,
    openFormStudent,
    handleCloseFormStudent,
    errorFormStudent,
    handleChange,
    handleAdd,
    formValue,
}) {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="overlay" hidden={!openFormStudent}>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-between align-items-center">
                        <h4>{dataEdit ? "Cập nhật" : "Thêm mới"} nhân viên</h4>
                        <i
                            className="fa-solid fa-xmark"
                            onClick={handleCloseFormStudent}
                        />
                    </div>
                    <div>
                        <label className="form-label" htmlFor="userName">
                            Họ và tên
                        </label>
                        <input
                            id="userName"
                            type="text"
                            value={formValue?.fullName || ""}
                            className="form-control"
                            name="fullName"
                            onChange={handleChange}
                        />
                        {errorFormStudent.fullName && (
                            <div className="form-text error">
                                Họ và tên không được để trống.
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="form-label" htmlFor="dateOfBirth">
                            Ngày sinh
                        </label>
                        <input
                            id="dateOfBirth"
                            type="date"
                            value={formValue?.dateOfBirth || ""}
                            className="form-control"
                            name="dateOfBirth"
                            onChange={handleChange}
                        />
                        {errorFormStudent.dateOfBirth && (
                            <div className="form-text error">
                                Ngày sinh không hợp lệ hoặc không được để trống.
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="form-label" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={formValue?.email || ""}
                            className="form-control"
                            name="email"
                            onChange={handleChange}
                        />
                        {errorFormStudent.email && (
                            <div className="form-text error">
                                Email không được để trống hoặc không đúng định
                                dạng.
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="form-label" htmlFor="address">
                            Địa chỉ
                        </label>
                        <textarea
                            className="form-control"
                            id="address"
                            name="address"
                            onChange={handleChange}
                            rows={3}
                            value={formValue?.address || ""}
                        />
                    </div>
                    <div>
                        <button
                            type="button"
                            className="w-100 btn btn-primary"
                            onClick={handleAdd}
                        >
                            {dataEdit ? "Cập nhật" : "Thêm mới"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
