import Calculation from "./components/Calculation";
import ListCourse from "./components/ListCourse";
import UserInfo from "./components/UserInfo";
import ColorBoxList from "./components/ColorBoxList";
import UsersList from "./components/UsersList";
import TodoListIndex from "./components/todolist/TodoListIndex";
function App() {
    return (
        <>
            <ListCourse />
            <Calculation />
            <UserInfo />
            <ColorBoxList />
            <UsersList />
            <TodoListIndex />
        </>
    );
}

export default App;
