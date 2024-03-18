import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './index.css'

const img='https://m.media-amazon.com/images/I/71hwUY5ZmxL._SY466_.jpg';
const title='Intresting Facts for curious Minds';
const author='Jordhan Moore';

const BookList = ()=> {
  return  <section className='booklist'>
   <Book author={author} title={title} img={img}/>
   <Book  author={author} title={title} img={img}/>

  </section>
}
const Book = (props)=> {
  console.log(props);
  return  <article  className='book'>
     <img src={props.img} alt={props.title}/>
     <h2>{props.title}</h2>
     <h4>{props.author}</h4>
  
  </article>
  
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
