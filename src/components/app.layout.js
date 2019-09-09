/* eslint-disable no-unused-expressions */
import React,{ useState} from 'react';
import '../App.css';
import { Container, Row, Col,Card, Button, Modal } from 'react-bootstrap';

import data from "./data";
const AppLayout = () => {
    const [count, setCount] = useState(false);
    const openModal=()=>{
        setCount(true);
        console.log('Fun');
        
    }
    const handleClose=()=>{
        console.log('gee');
        setCount(false);
    }
   let gdata =  data.map((data,i)=>{
        return  <Col xs={4}  className={i > 2 ? 'autoHeight': ''}>
      <div className="col-xs-12" >
          <Card  style={{ width: '18rem', height: '0.1rem' }}>
              <Card.Img   variant="top" style={{ width: '18rem', height: '10rem' }} src="https://images.pexels.com/photos/2873510/pexels-photo-2873510.jpeg" />
              <Card.Body className="cardStyle">
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
</Card.Text>
                  <Button variant="primary" onClick={openModal}>Go somewhere</Button>
              </Card.Body>
          </Card>
          </div>
      </Col>
      
     } );
     let finalData = chunkArray(gdata,3);
   
    return (
         <>  <Container className="container" >
            
            {finalData.map((e,id)=>{
                console.log(e);
               return <Row  key ={id} className="getDiffrence">{e}</Row>
            })}
                
            
        </Container>  
        <Modal  size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={count} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!
          Woohoo, you're reading this text in a modal!
          Woohoo, you're reading this text in a modal!
          Woohoo, you're reading this text in a modal!
          Woohoo, you're reading this text in a modal!
          Woohoo, you're reading this text in a modal!
          Woohoo, you're reading this text in a modal!
          Woohoo, you're reading this text in a modal!
          Woohoo, you're reading this text in a modal!
          Woohoo, you're reading this text in a modal!
          Woohoo, you're reading this text in a modal!
          Woohoo, you're reading this text in a modal!
          <br />
          <div className="imageClass">
          <figure>
          <img   title="Title Tag Goes Here" src="http://stage-bcdn.newshunt.com/cmd/resize/740x320__DHQ_/dhc/images/creator/61/09/81/61098140ce4c11e9a5bf8f0e8678142f.jpg" alt="ImageIsHere"  />
          <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
          </figure>
          </div>
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