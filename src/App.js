import React, {useState} from 'react'
import "./App.css";
import About from "./components/About";
import Alert from './components/Alert';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  
  const[mode,setMode] = useState("light");
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#12323c';
      showAlert("Dark Mode Enabbled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabbled","success");


    }
  }
  
  return (
    <>
   <BrowserRouter>
    
    <Navbar title="TextUtils" aboutTextUtils="About Us" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container">
    <Routes>
        <Route path="/about" element={<About mode={mode} />} />
          
        <Route path="/" element={    <TextForm showAlert={showAlert} heading="Enter Text Here" mode={mode}/> }  />
        
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
