/* eslint-disable no-unused-expressions */
import React,{ useState,useEffect} from 'react';
import ReactTooltip from 'react-tooltip'
import axios from 'axios';
import '../App.css';
import { Container, Row, Col,Card, Button, Modal } from 'react-bootstrap';

import data from "./data";


const AppLayout =  () => {
    const [count, setCount] = useState(false);
    const [getContent, setContent] = useState([]);
    const [title,setTitle] = useState('');
    const [request,setRequest] = useState('');
  
    
    let req = false;
    const openModal=(e,title)=>{
      console.log(e);
      setRequest(e);
      setTitle(title);
        setCount(true);
        
        // dangerouslySetInnerHTML
    }
    const handleClose=()=>{
      
        setCount(false);
    }
    const getData=async ()=>{
       await axios.get(`http://3.17.26.22:3002/getPost`)
      .then(res => {
        const posts = res.data;
      
        setContent( posts );
        return posts;
      })
      return 'posts';
    }
    
    

    useEffect( () => {
      getData(e=>{
      console.log(e);
     });
     console.log(getContent);
      
    },[])


   let gdata =  getContent.map((data,i)=>{
   
        return  <Col xs={4}  className={i > 2 ? 'autoHeight': ''}>
      <div className="col-xs-12" >
      <ReactTooltip />
          <Card  style={{ width: '18rem', height: '0.1rem' }}>
              <Card.Img   variant="top" style={{ width: '18rem', height: '10rem' }} src={ data.image || "https://www.fillmurray.com/640/360"} />
              <Card.Body className="cardStyle">
                  <Card.Title data-tip={data.title} className="title-text">{data.title|| 'No Title Found'}
                   
                  </Card.Title>
                  
                  <Card.Text data-tip={data.glimpse} className="title-text">
                      {data.glimpse || "No content found for this" }
</Card.Text>
                  <Button variant="primary" onClick={()=> openModal(data.content,data.title)}>Go somewhere</Button>
              </Card.Body>
          </Card>
          </div>
      </Col>
      
     } );
     let finalData = chunkArray(gdata,3);
   
    return (
         <>  <Container className="container" >
            
            {finalData.map((e,id)=>{
              
               return <Row  key ={id} className="getDiffrence">{e}</Row>
            })}
                
            
        </Container>  
        <Modal  size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={count} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title" alt={title}>{title || 'No Heading'}</Modal.Title>
          </Modal.Header>
          <Modal.Body> <div contentEditable='true' dangerouslySetInnerHTML={{ __html: request}}></div> 
          <br />
          {/* <div className="imageClass">
          <figure>
          <img   title="Title Tag Goes Here" src="http://stage-bcdn.newshunt.com/cmd/resize/740x320__DHQ_/dhc/images/creator/61/09/81/61098140ce4c11e9a5bf8f0e8678142f.jpg" alt="ImageIsHere"  />
          <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
          </figure>
          </div> */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
         </Modal>
          </>
      
    )
}

function chunkArray(myArray, chunk_size){
    var results = [];
    
    while (myArray.length) {
        results.push(myArray.splice(0, chunk_size));
    }
    
    return results;
}

export default AppLayout;