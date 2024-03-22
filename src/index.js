import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


const books =[
  {
    img:'https://m.media-amazon.com/images/I/71hwUY5ZmxL._SY466_.jpg',
    title:'Intresting Facts for curious Minds',
    author:'Jordhan Moore'
  },
   {
    img:'https://m.media-amazon.com/images/I/71sBtM3Yi5L._SY466_.jpg',
    title:'The Power of Your Subconscious Mind',
    author:'Joseph Murphy'
  }, 

  {
    img:'https://m.media-amazon.com/images/I/41n4z8Xv1BL._SY445_SX342_.jpg',
    title:'Same As Ever',
    author:'Morgan Housel'
  }];

//   const names = ['john', 'peter' ,'susan'];
// const newNames = names.map((name)=>{

//   return<h1>{name}</h1>
// })
// console.log(newNames);
const BookList =() => {
  return (
     <section className='booklist'>
 {books.map((book)=>{
 const {img, title, author} = book;

return <Book img={img} title={title} author={author} />
  
 })}
    </section>

  );
}
  const Book =(props)=> {
    const {img, title, author} = props;
    console.log(props);
    return (
      <article  className='book'>
    <img src={img} alt={title}/>
    <h2>{title}</h2>
    <h4>{author}</h4>
 </article>
    );
  }


  

  
 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
