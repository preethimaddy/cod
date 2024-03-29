import {useState} from 'react'

const Shortcircuitoverview = () => {
    //Falsy
    const [text, setText] = useState('');
    //Truthy
    const [name, setName] = useState('susan');
  return (
   
    <div>
         {/*if some conditon wont work */}
<h4>FALSY OR: {text || 'hello world'}</h4>
<h4>FALSY AND: {text && 'hello world'}</h4>
<h4>TRUTHY OR: {name || 'hello world'}</h4>
<h4>TRUTHY AND: {name && 'hello world'}</h4>

        </div>
  );
};

export default Shortcircuitoverview