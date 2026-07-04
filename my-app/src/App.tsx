import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Counter from './components/Counter'
import DrinkList from './components/DrinkList'
import InputValueState from './components/InputValueState'
import Todos from './placeholder/Todos'
import TodoDetail from './placeholder/TodoDetail'
// import Greet from './components/Greet'
// import Player from './components/Player'
// import Player2 from './components/Player2'


function App() {

  // // 객체 정의
  // const playerObj = {
  //   name: "신유빈",
  //   age: 22
  // }

  // const clickHandler = () => {
  //   alert("버튼이 클릭되었습니다");
  // }

  return (
    <>
      <section className="app">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Todos />} />
            <Route path='/todos/:id' element={<TodoDetail />} />
          </Routes>
        </BrowserRouter>
        {/* <h2>TypeScript 기반 React 프로젝트</h2> */}
        {/* <Greet name="타입스크립트" /> */}
        {/* <Player player={playerObj} clickHandler={clickHandler} /> */}
        {/* <Player2 player={playerObj} clickHandler={clickHandler} /> */}
        {/* <Counter /> */}
        {/* <InputValueState /> */}
        {/* <DrinkList />         */}


      </section>

    </>
  )
}

export default App
