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
    props.showAlert("UpperCase Enabbled","success");
  }
  const handleLoClick = ()=>{
    // console.log("Clicked Uppercase Converter.");
    const newText  = text.toLowerCase();
    setText(newText);
    props.showAlert("LowerCase Enabbled","success");

  }
  const handleClearText = ()=>{
    const newText = '';
    setText(newText);
    props.showAlert("Text Cleared","success");

  }
  const handleFiCapital = ()=>{
    const newText = text.split(' ').map(el => el.charAt(0).toUpperCase()+el.slice(1)).join(' ');
    setText(newText);
    props.showAlert("First Letter Capital","success");

  }
  const handleCopy = ()=>{
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied","success");

  }
  const removeExtraSpaces = ()=>{
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed","success");

  }


  
  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1 className="my-3">{props.heading}</h1>
        <p>Play with Text</p>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : 'grey' , color: props.mode === 'light' ? 'black' : 'white'}} id="mybox" rows="8"></textarea>
        <button disabled={text.length==0} className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length==0} className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length==0} className="btn btn-primary my-3 mx-3" onClick={handleClearText}>Clear Text</button>
        <button disabled={text.length==0} className="btn btn-primary my-3 mx-3" onClick={handleFiCapital}>First Word Capital</button>
        <button disabled={text.length==0} className="btn btn-primary my-3 mx-3" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length==0} className="btn btn-primary my-3 mx-3" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h3>Your Text Summary</h3>
      <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters.</p>
      <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} Minutes to Read.</p>

      <h3>Preview</h3>
      <p>{text.length>0 ? text : "Enter Text Above to Preview."}</p>
    </div>
    </>
  )
}
