import TodoItem from "./TodoItem";

const TodoList = () => (
    <div className="tab-content">
        <div className="tab-pane fade show active">
            <ul className="list-group mb-0">
                <TodoItem done={true} text="Cras justo odio" />
                <TodoItem done={false} text="Cras justo odio" />
            </ul>
        </div>
    </div>
);

export default TodoList;
