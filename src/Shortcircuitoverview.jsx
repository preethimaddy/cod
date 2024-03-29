import {useState} from 'react'

const Shortcircuitoverview = () => {
    //Falsy
    const [text, setText] = useState('ff');
    //Truthy
    const [name, setName] = useState('susan');
    const [user, setUser] = useState({name:'Wong'});
    const [isEditing, setIsEditing] = useState(false);
  return (
   
    <div>
         {/*if some conditon wont work */}
{/* <h4>FALSY OR: {text || 'hello world'}</h4>
<h4>FALSY AND: {text && 'hello world'}</h4>
<h4>TRUTHY OR: {name || 'hello world'}</h4>
<h4>TRUTHY AND: {name && 'hello world'}</h4> */}
<h2>{text || 'default value'}</h2>
{/* {text && (<div>
    <h3>Whatever returns</h3>
<h3>{name}</h3>
</div>)} */}
{user && <SomeComponent name={user.name} />}
<h2 style={{margin: '1rem 0'}}>Ternary operator</h2>
<button className='btn'>{isEditing?'edit':'add'}</button>
{user ? <div>
    <h3>Hello there!!!{user.name}</h3>
</div> :(<div>
    <h2>Please Login</h2>
</div>)
}
        </div>
  );
};

const SomeComponent =({name}) =>{
    return (
        <div>
            <h2>Whatever Returns</h2>
        </div>
    )
}

export default Shortcircuitoverview