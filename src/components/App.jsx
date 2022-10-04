import React,{useState} from 'react';
import  Heading from './Heading';
import  Footer from './Footer';
import Note from './Note';
import Input from './Input'

function App() {
    const [addItem, setAddItem] = useState([]);
    

    function addNotes(notes) {  
        setAddItem(newValue => {
            return [...newValue, notes]
        });
    }

    function deleteNote(id) {
        setAddItem(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }
    

    return <div>
        <Heading />
        <Input 
        Addon = {addNotes}

        />
        {addItem.map((item,index) => {
            return <Note
                
                key={index}
                id = {index}
                title={item.title}
                content={item.content}
                remove ={deleteNote}
                
            />
        }) }
       
        <Footer/>
    </div>;
};

export default App;