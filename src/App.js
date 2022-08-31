import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <>

<BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home pageSize={6} />} />
          {/* <Route path="/" element={<Rough />} /> */}
         
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>

    </>
  );
}

export default App;
