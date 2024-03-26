import {React} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Book from './Book';

const books =[
  {
    img:'https://m.media-amazon.com/images/I/71hwUY5ZmxL._SY466_.jpg',
    title:'Intresting Facts for curious Minds',
    author:'Jordhan Moore',
    id:1
  },
   {
    img:'https://m.media-amazon.com/images/I/71sBtM3Yi5L._SY466_.jpg',
    title:'The Power of Your Subconscious Mind',
    author:'Joseph Murphy',
    id:2
  }, 

  {
    img:'https://m.media-amazon.com/images/I/41n4z8Xv1BL._SY445_SX342_.jpg',
    title:'Same As Ever',
    author:'Morgan Housel',
    id:3
  }];

//   const names = ['john', 'peter' ,'susan'];
// const newNames = names.map((name)=>{

//   return<h1>{name}</h1>
// })
// console.log(newNames);

function BookList () {
  const someValue = 'MeatandEat'
  const displayValue = () =>{
    console.log(someValue);
  }
  return (
     <section className='booklist'>
      {/* <EventExamples /> */}
 {books.map((book, index)=>{
return <Book {...book} key={book.id} displayValue={displayValue} number={index} />
 })}
    </section>

  );
}
// const EventExamples =()=>{
//   const handleFormInput = () => {
//     console.log('handle with care')
//   }
//   const handleButtonClick = ()=>{
//     alert('handle button click')
//   }
//  const handleFormSubmission = (e)=>{
//   e.preventDefault()
//     console.log('form submitted')
  
//   }
//   return <section>
//     <form>
//     <h2>Typical form</h2>
//     <input type='text' name='example' onChange={(e)=>console.log(e.target.value)} style={{margin:'1rem 0'}}/>
//     <button type='submit'  onClick={handleFormSubmission}>Submit</button>
//     </form>
//     <button onClick={()=> console.log('clickclick')} type='button'>clickme</button>
   
//   </section>;
// }
  

const friends = ['john', 'regina', 'michael']
const newFriends= [...friends,'Preethi']
  console.log(friends);
  console.log(newFriends);

  const someobj={
    name:'preethi',
    class: '1st year',
    job:'developer'
  }

  //copy not a reference
  const newobj={
    ...someobj, location:'florida'
  }
console.log(someobj);
console.log(newobj);
  
 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
