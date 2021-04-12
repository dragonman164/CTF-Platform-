import {Button,Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const CreateTeam = ()=>{

    return (
        <>
        <div className="container bg-dark text-light my-4 py-3">

            <h1>Register your Team Here</h1>
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Team Name</Form.Label>
    <Form.Control type="text" placeholder="Team Name"/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Retype Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Link to ="/createTeamSuccess"><Button variant="warning btn-lg" type="submit">
    Create Team
  </Button></Link>
</Form>
        </div>
        </>
    )
}

export default CreateTeam;