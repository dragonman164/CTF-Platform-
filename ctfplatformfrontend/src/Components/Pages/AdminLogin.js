import {Form,Button} from 'react-bootstrap'; 

const AdminLogin = ()=>{

    return (
        <>
          <>
        <div className="container text-light bg-dark my-4 py-3">
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label className="h4">Admin Id</Form.Label>
    <Form.Control type="text" placeholder="Admin" />
    <Form.Text className="text-muted">
     Admin Password
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label className="h4">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Button variant="success btn-lg mx-2" type="submit" >
    Login 
  </Button>
</Form>
</div>
  <div className="container text-center text-light bg-dark">
            <h1>***This Page is for Admin Only***</h1>
            <h2>***Non-Admin Users are strictly unauthorized to access this Page***</h2>
            <h2>***Using any unfair means will lead to Disqualification of the Team***</h2>
  </div>
        </>
        </>
    )
}

export default AdminLogin;