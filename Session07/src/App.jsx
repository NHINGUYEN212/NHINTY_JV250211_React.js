
import './App.css'
import Button from './components/Buttons'
import FlexTailwind from './components/FlexTailwind'
import LearnTable from './components/LearnTable'
import Login from './components/Login'
import Square from './components/Square'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {


  return (
    <div className='container'>
      <Square></Square>
      <FlexTailwind></FlexTailwind>
      <Button></Button>
      <LearnTable></LearnTable>
      <Login></Login>
    </div>
  )
}

export default App
