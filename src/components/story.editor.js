import React,{ useState} from 'react';
import 'react-quill/dist/quill.snow.css'; // ES6
import ReactQuill from 'react-quill'; // ES6
import { Container ,FormControl,Button} from 'react-bootstrap';
import axios from 'axios';
import '../App.css';

let config = {
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      }
    }

const StoryEditor = ()=>{
    const [text,setText] = useState("");
    const [title,settitle] = useState("");
    const [image,setimage] = useState("");
    const [glimpse,setglimpse] = useState("");
    const handleChange =(c)=>{
        setText(c);
        console.log(c);
    }
    const modules = {
      toolbar: [
        [{ 'header': [1, 2, false] }, { 'font': [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, 
         {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'video'],
        ['clean']
      ]
    }
    /* 
     * Quill editor formats
     * See https://quilljs.com/docs/formats/
     */
    const formats = [
      'header', 'font', 'size',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image', 'video'
    ]
    const titleChange =(c)=>{
        settitle(c.target.value);
        console.log(c.target.value);
    }
    const glimpseChange =(c)=>{
      setglimpse(c.target.value);
      console.log(c.target.value);
  }
  const imageChange =(c)=>{
    setimage(c.target.value);
    console.log(c.target.value);
}
    const submitData =(c)=>{
        const data = {
            title : title,
            textData:text,
            image:image,
            glimpse:glimpse
        }
        axios.post('http://3.17.26.22:3002/insert', {
            title: title.toString(),
            content: text.toString(),
            image:image.toString(),
            glimpse:glimpse.toString()
          })
          .then(function (response) {
            console.log(response);
            alert('Data saved !!');
            window.location.reload();
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log(data);
    }
    return (
        <>
        
    <FormControl
      placeholder="Enter Title"
      aria-label="Username"
      className="editormargin"
      aria-describedby="basic-addon1"
      onChange={titleChange}
    />
    <FormControl
      placeholder="Enter Glimpse of News"
      aria-label="Glimpse"
      className="editormargin"
      aria-describedby="basic-addon1"
      onChange={glimpseChange}
    />
    <FormControl
      placeholder="Paste Image URL"
      aria-label="Image Uploader"
      className="editormargin"
      aria-describedby="basic-addon1"
      onChange={imageChange}
    />
        <Container>
        <ReactQuill theme="snow"  modules={modules}
        formats={formats} placeholder="Enter Content Here" value={text}
                    onChange={handleChange} />

     

  <Button variant="danger"  className="editormargin" onClick={submitData}>Submit Data</Button>    
        </Container>
        </>

      )
}
export default StoryEditor;