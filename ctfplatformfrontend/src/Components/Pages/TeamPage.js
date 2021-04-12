import {Form,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const TeamPage = ()=>{

    return (
        <>
        <div className="container text-light bg-dark my-4 py-3">
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label className="h4">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label className="h4">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

 <Link to="/challenges"><Button variant="success btn-lg mx-2" type="submit" >
    Login 
  </Button></Link> 
 <Link to="/createTeam"><Button variant="danger btn-lg " type="submit" >
    Create a new Team
  </Button></Link>
</Form>
</div>

        <div className="container bg-dark text-light">
            <h3>Instructions for Creating a New Team</h3> 
            <ol className="h5 font-weight-light">
               <li>Only one person from each team will register here.</li>
               <li>Make sure your team name is same as that you have submitted to us.</li>
               <li>Make sure you don't forget your password as this portal does not support reset password option.</li>
               <li>In case you have any issues, contact the admin of this platform.</li>  
               <li>In case an account already exists with a given team name, you should change your team name accordingly.</li>
            </ol>
        </div>

        <div className="container bg-dark text-light">
            <h3>CTF Rules</h3> 
            <ol className="h5 font-weight-light">
               <li>There is no age restriction for this CTF.</li>
               <li>Spoiling this CTF Platform by any means will lead to disqualification.</li>
               <li>Multiple Team members can login with a given team account.</li>
               <li>You are not supposed to perform any types of DOS attacks or bruteforcing for any challenge hosted on this Platform</li>  
            </ol>
        </div>


        </>
    )
}

export default TeamPage;