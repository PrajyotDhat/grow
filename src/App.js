
import './App.css';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './pages/Login';
import Fetch from './pages/Fetch';

function App() {
  return (
    <div>
    <Router>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/second-page' element={<Fetch/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
