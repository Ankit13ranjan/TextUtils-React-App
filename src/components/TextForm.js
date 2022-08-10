import React from 'react'

export default function TextForm(props) {
  return (
    <div className="mb-3">
        <h1 className="my-3">Enter Text Below</h1>
        <p>Play with Text</p>
        <textarea className="form-control" id="mybox" rows="8"></textarea>
        <button className="btn btn-primary my-3">{props.text}</button>
    </div>
  )
}
