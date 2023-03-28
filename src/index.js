import React from 'react';
import ReactDOM from 'react-dom/client';
import Photo from "./photo.js"
import Header from "./Header.js"

const myPage =<div>
<Header/>
 <h1 style={{color: "blue"}}>this u?</h1>
 <Photo/>
 <h1 style={{color:"red"}}> this meme was brought to you by google</h1>
 </div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myPage);
