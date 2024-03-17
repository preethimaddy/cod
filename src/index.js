import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const BookList = ()=> {
  return  <section>
   <Book/>
  </section>
  
}
const Book = ()=> {
  return  <article>
     <Image/>
<Title/>
<Author/>
  </article>
  
}

const Image =()=><img src='https://m.media-amazon.com/images/I/71hwUY5ZmxL._SY466_.jpg' alt='Interesting Facts For Curious Minds'/>
const Title =()=><h3>Book Title</h3>
const Author =()=>{
return <h4>Author</h4>}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
