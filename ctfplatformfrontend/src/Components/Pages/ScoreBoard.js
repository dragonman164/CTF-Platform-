import {Table} from 'react-bootstrap';
import {useEffect,useState} from 'react';
import axios from 'axios';
let userDetails = []

const ScoreBoard = ()=>{

  
  const [data,setData] = useState(false)
  useEffect( ()=> {

    async function request()
    {
        try{
            const Response = await axios.get('http://127.0.0.1:8000/teamapi/',{
              headers:{
                Authorization:  'Basic YWRtaW46YWRtaW4=' // if you use token
            }
            })
            userDetails = Response.data
            console.log(userDetails);
            setData((prev) => setData(!prev));

        }catch(e)
        {
            console.log(e);
        }
    }
    request()
    


},[])

    return (
        <>
        <div className="container bg-dark text-light text-center my-3 py-2">
          <h1> Score Board: (Only Top 3 Teams will get Cash Prizes)</h1>
        </div>

        <div className="container text-center my-3 py-2">
        <Table responsive striped bordered hover variant="dark">
  <thead>
    <tr>
   
      <th>Rank</th>
      <th>Team Name</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
  {
      userDetails.map((elem,index)=>{
        return (
      <tr>
      <td>{index+1}</td>
      <td>{elem.name}</td>
      <td>{elem.total_score}</td>
    </tr>
        )
      })
    }

  </tbody>
</Table>
</div>
       </> 
    )
}

export default ScoreBoard;