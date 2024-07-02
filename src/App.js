import './App.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
// import NavScrollExample from './components/Navbar';
import HomePage from './components/HomePage';
import FeedbackForm from './components/FeedbackForm';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return ( 
    <BrowserRouter>
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<NavScrollExample/>}/> */}
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Feedback' element={<FeedbackForm/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
