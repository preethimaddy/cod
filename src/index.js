import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './index.css'

const firstbook = {
  img:'https://m.media-amazon.com/images/I/71hwUY5ZmxL._SY466_.jpg',
  title:'Intresting Facts for curious Minds',
  author:'Jordhan Moore'
}
const secondbook = {
  img:'https://m.media-amazon.com/images/I/71sBtM3Yi5L._SY466_.jpg',
  title:'The Power of Your Subconscious Mind',
  author:'Joseph Murphy'
}
const thirdbook = {
  img:'https://m.media-amazon.com/images/I/41n4z8Xv1BL._SY445_SX342_.jpg',
  title:'Same As Ever',
  author:'Morgan Housel'
}
const BookList = ()=> {
  return  <section className='booklist'>
   <Book author={firstbook.author} title={firstbook.title} img={firstbook.img}/>
   <Book  author={secondbook.author} title={secondbook.title} img={secondbook.img}/>
   <Book  author={thirdbook.author} title={thirdbook.title} img={thirdbook.img}/>

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
