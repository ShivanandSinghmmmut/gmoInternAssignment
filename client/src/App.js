import logo from './logo.svg';
import './App.css';
import Firstpage from './component/firstpage';
import SecondPage from './component/secondpage';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Firstpage/>}></Route>
        <Route exact path='/secondpage' element={<SecondPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
