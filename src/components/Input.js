import React,{useState} from 'react'


const Input = (props) => {
    
        const [notes, setNotes] = useState({
            title: "",
            content: "",
        });
    
    function handleChange (e){
        const { value, name } = e.target;
        setNotes(preValue => {
            return {
                ...preValue,
                [name]: value
            }
        });
    }
  

    function handleClick(event) {
        props.Addon(notes);
        setNotes({
            title: "",
            content: "",
        })
        event.preventDefault();
        
    }
  
  
  
    return (
        <div className='inputDiv'>
            <form>
            <input onChange={handleChange} value={notes.title} className='title' type='text' placeholder='title' name="title"></input>
            <input onChange={handleChange}  value={notes.content} className='title' type='text' placeholder='content' name="content" ></input>
            <button onClick={handleClick} >add</button>
            </form>
           
        </div>
    );
}

export default Input;