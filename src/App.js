import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/Main';
import Page1 from './pages/Page1';
import Header from './containers/Header';
import Footer from './containers/Footer';
import Page404 from './pages/Page404';
import Page2 from './pages/Page2';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' Component={MainPage}/>
          <Route path='/page1' Component={Page1}/>
          <Route path='/page2' Component={Page2}/>

          <Route path='/404' Component={Page404}/>
          <Route path='*' element={<Navigate to='/404' replace />}/>
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
