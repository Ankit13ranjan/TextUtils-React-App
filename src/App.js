import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
    
      <Navbar title="TextUtils" aboutTextUtils="About TextUtils" />
      <div className="container">
        <TextForm text="Convert to UpperCase"/>
      </div>
    </>
  );
}

export default App;
