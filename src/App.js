import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ListUser from './component/ListUser';
import NavBar from './component/NavBar';
import CreateUser from './component/createUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ListUser />} />
          <Route exact path="/create" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
