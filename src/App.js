import './App.css';
// import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/textForm';
import Alert from './Component/Alert';
// import Home from './Component/home';
import React, {useState} from 'react';
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({ msg: message, type: type })
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode"
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils - Light Mode"
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" page="HOME" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-4">
          {/* <Routes>
            <Route path="/about" element={<About />} /> */}
            {/* {/* <Route path="/" element={ */}
            <TextForm showAlert={showAlert} heading="This is the heading" mode={mode} />
             {/* } /> */} 
            {/* <Route path="/home" element={<Home />} /> */}
          {/* </Routes>  */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;