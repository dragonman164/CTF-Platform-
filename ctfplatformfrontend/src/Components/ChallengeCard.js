import {Card,Button,Modal,Form} from 'react-bootstrap';
import {useState} from 'react'


const ChallengeCard = () =>{


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return (

      <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Challenge Name (Difficulty : (Easy/Medium/Hard)) </Modal.Title>
        </Modal.Header>
        <Modal.Body>Write the desired challenge description here
        
           <Form className="my-5">
        <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label>Submit your Flag</Form.Label>
      <Form.Control type="text" placeholder="ABCCTF{This_is_a_sample_flag}"/>
      </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
     
    
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Submit your Flag
          </Button>
        </Modal.Footer>
      </Modal>


        <Card style={{ width: '20rem' }} className="text-dark bg-warning mx-3 my-3">
        <Card.Body>
          <Card.Title className="font-weight-bold">Challenge Name</Card.Title>
          <Card.Subtitle className="font-weight-bold my-3">Difficulty : (Easy/Medium/Hard)</Card.Subtitle>
          <Card.Text className="font-weight-bolder">
          Challenge Description will be displayed here. A user will solve this Challenge
          </Card.Text>
          <Button className="primary btn-lg" onClick={()=>{setShow(true)}}>Solve</Button>
        </Card.Body>
      </Card>
      
        </>
    )
}

export default ChallengeCard;