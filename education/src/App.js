import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { RegisterUser } from "./pages/RegisterUser";
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <>
  
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/" element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
