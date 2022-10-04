import React,{useState} from 'react';






function Note(props) {

    function handleClick() {
        props.remove(props.id);
}


    return ( <div className='note'> 
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <div className='deleteBtn'>
        <button onClick={handleClick}>x</button>
       </div>
    </div>);
    
}

export default Note;