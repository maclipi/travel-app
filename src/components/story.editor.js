import React,{ useState} from 'react';
import 'react-quill/dist/quill.snow.css'; // ES6
import ReactQuill from 'react-quill'; // ES6
import { Container ,FormControl,Button} from 'react-bootstrap';


const StoryEditor = ()=>{
    const [text,setText] = useState("");
    const [title,settitle] = useState("");
    const handleChange =(c)=>{
        setText(c);
        console.log(c);
    }
    const titleChange =(c)=>{
        settitle(c.target.value);
        console.log(c.target.value);
    }
    const submitData =(c)=>{
        const data = {
            title : title,
            textData:text
        }
        console.log(data);
    }
    return (
        <>
        
    <FormControl
      placeholder="Enter Title"
      aria-label="Username"
      aria-describedby="basic-addon1"
      onChange={titleChange}
    />
        <Container>
        <ReactQuill theme="snow" value={text}
                    onChange={handleChange} />
                
  <Button variant="danger" onClick={submitData}>Submit Data</Button>    
        </Container>
        </>

      )
}
export default StoryEditor;