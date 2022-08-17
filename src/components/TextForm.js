import React, {useState} from 'react'

export default function TextForm(props) {

  const handleOnChange =(event)=>{
    // console.log('clicked');
    setText(event.target.value)
  }
  const handleUpClick = ()=>{
    // console.log("Clicked Uppercase Converter.");
    const newText  = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = ()=>{
    // console.log("Clicked Uppercase Converter.");
    const newText  = text.toLowerCase();
    setText(newText);
  }
  const handleClearText = ()=>{
    const newText = '';
    setText(newText);
  }
  const handleFiCapital = ()=>{
    const newText = text.split(' ').map(el => el.charAt(0).toUpperCase()+el.slice(1)).join(' ');
    setText(newText);
  }
  const handleCopy = ()=>{
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  
  const [text, setText] = useState('Enter Text Here.');
  return (
    <>
    <div className="container">
        <h1 className="my-3">{props.heading}</h1>
        <p>Play with Text</p>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        <button className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>{'Convert to Uppercase'}</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>{'Convert to Lowercase'}</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleClearText}>{'Clear Text'}</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleFiCapital}>{'First Word Capital'}</button>
    </div>
    <div className="container">
      <h3>Your Text Summary</h3>
      <p>{text.split(' ').length} Words and {text.length} Characters.</p>
      <p>{0.008 * text.split(' ').length} Minutes to Read.</p>

      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
