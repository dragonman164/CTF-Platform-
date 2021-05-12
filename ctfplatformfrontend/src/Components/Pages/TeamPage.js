import {Form,Button,Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useEffect,useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

let loginid ="",loginPass = ""

const TeamPage = ()=>{

  const history = useHistory()

  const [teamData,setTeamData] = useState(null);
  const [alert,showAlert] = useState(false);
  

  useEffect(()=>{
    async function request()
    {
        try{
            const Response = await axios.get('http://127.0.0.1:8000/teamapi/',{
              headers:{
                Authorization:  'Basic YWRtaW46YWRtaW4=' // if you use token
            }
            })
  
            setTeamData(Response.data);
          

        }catch(e)
        {
            console.log(e);
        }
    }
    request()
  
  },[])



    return (
        <>
        {alert?<Alert variant="danger">
    There was some error!! Pls Try Again
  </Alert>:null}
        <div className="container text-light bg-dark my-4 py-3">
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label className="h4">LoginId</Form.Label>
    <Form.Control type="text" placeholder="Enter your Login Id" onChange ={(e)=>{loginid = e.target.value}} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label className="h4">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange ={(e)=>{loginPass = e.target.value}} />
  </Form.Group>

 <Button variant="success btn-lg mx-2" onClick={()=>{
   let loginAllowed = false;
   teamData.map((elem)=>{
     if(elem.name === loginid && elem.loginPass === loginPass)
     {
       loginAllowed = true
       localStorage.setItem('login',elem.loginId)
       history.push('/challenges')
     }
   })
   if(!loginAllowed)
   showAlert(true)
 }} >
    Login 
  </Button>
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