import TodoListIndex from "./components/bt6/TodoListIndex"
import ColorBox from "./components/ColorBox"
import LoggerCounter from "./components/LoggerCounter"
import ManagerForm from "./components/ManagerForm"
import PreviewImage from "./components/PreviewImage"
import Watch from "./components/Watch"


function App() {

  return (
    <>
      <ColorBox></ColorBox>
      <LoggerCounter></LoggerCounter>
      <Watch></Watch>
      <ManagerForm></ManagerForm>
      <PreviewImage></PreviewImage>
      <TodoListIndex></TodoListIndex>
    </>
  )
}

export default App
