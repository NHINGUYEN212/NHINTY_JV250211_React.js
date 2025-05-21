const TodoItem = ({ done, text }) => (
    <li
        className="list-group-item d-flex align-items-center border-0 mb-2 rounded justify-content-between"
        style={{ backgroundColor: "#f4f6f7" }}
    >
        <div>
            <input
                className="form-check-input me-2"
                type="checkbox"
                defaultChecked={done}
            />
            {done ? <s>{text}</s> : text}
        </div>
        <div>
            <a href="#!" className="text-info" title="Sửa công việc">
                <i className="fas fa-pencil-alt me-3" />
            </a>
            <a href="#!" className="text-danger" title="Xóa công việc">
                <i className="fas fa-trash-alt" />
            </a>
        </div>
    </li>
);

export default TodoItem;
