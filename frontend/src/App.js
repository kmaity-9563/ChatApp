
import './App.css';
import {HomePage} from './Pages/HomePage';
import {MainPage} from './Pages/MainPage';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/chats" element={<MainPage/>}/>
     </Routes>
    </div>
  );
}

export default App;
