import React, {useState} from "react";

export default function Textform(props) { 
  const handleUpclick = ()=>{
    let newText = text.toUpperCase()
    setText(newText) 
    props.showAlert("Converted to uppercase ! ","success")
  }

  const handleLowerclick = ()=>{
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to Lowercase ! ","success")
  }

  const handleClearclick = ()=>{
    let newText = ' '
    setText(newText)
    props.showAlert("Text cleared ! ","success")
  }

  const handleOnchange = (event)=>{
    console.log('On change') 
    setText(event.target.value)
  }

  const handleCopy = () => {
    var text = document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied ! ","success")
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Removed Extra Spaces ! ","success")
  }

  const [text, setText] = useState('Enter text here');

  // const [style, setStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white' 
  // });

  // const handleColorclick = ()=>{
  //   if(style.color === 'black'){ 
  //     setStyle({
  //       color: 'red',
  //       backgroundColor: 'black'
  //     }) 
  //   }
  //   else{
  //     setStyle({
  //       color: 'black',
  //       backgroundColor: 'white'
  //     })
  //   }
  // }
  return (
    <>
    <div className="container" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
      <h1 >{props.heading}</h1> 
      <div className ="mb-3" >
        <textarea className="form-control"  value={text} onChange={handleOnchange} style ={{backgroundColor : props.mode === 'grey' ? 'white' : 'light'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-dark" onClick={handleUpclick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowerclick}>Convert to Lowercase</button>
      <button className="btn btn-secondary" onClick={handleClearclick}>Clear Text</button>
      {/* <button className="btn btn-secondary mx-2" onClick={handleColorclick}>Convert to red and black color</button> */}
      <button className="btn btn-secondary mx-2" onClick={handleCopy}>Copy text</button>
      <button className="btn btn-secondary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div> 
    <div className="container my-5 ">
      <h1 style={{color : props.mode === 'dark' ? 'white' : 'black'}}>Your text summary</h1>
      <p style={{color : props.mode === 'dark' ? 'black' : 'grey'}}>{text.split(" ").length} words and {text.length} characters</p> 
      <p style={{color : props.mode === 'dark' ? 'black' : 'grey'}}>{0.008 * text.split(" ").length} Minutes read</p> 
      <h3 style={{color : props.mode === 'dark' ? 'white' : 'black'}}>Preview</h3>
      <p style={{color : props.mode === 'dark' ? 'black' : 'grey'}}>{text.length > 0 ? text : "Enter text for preview"}</p>
    </div>
    </>
  ); 
}