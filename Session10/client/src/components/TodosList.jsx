import TodoItem from "./TodoItem";

export default function TodosList({ todos, onDelete }) {
    return (
        <ul className="space-y-2 mb-4">
            {todos &&
                todos.map((todo) => (
                    <TodoItem data={todo} key={todo.id} onDelete={onDelete} />
                ))}
        </ul>
    );
}
