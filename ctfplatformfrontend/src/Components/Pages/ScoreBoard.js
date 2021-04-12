import {Table} from 'react-bootstrap';


const ScoreBoard = ()=>{

    return (
        <>
        <div className="container bg-dark text-light text-center my-3 py-2">
          <h1> Score Board</h1>
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
    <tr>
      <td>1</td>
      <td>ABC</td>
      <td>200</td>
    </tr>
    <tr>
      <td>1</td>
      <td>ABC</td>
      <td>200</td>
    </tr>
    <tr>
      <td>1</td>
      <td>ABC</td>
      <td>200</td>
    </tr>
    <tr>
      <td>1</td>
      <td>ABC</td>
      <td>200</td>
    </tr>
  </tbody>
</Table>
</div>
       </> 
    )
}

export default ScoreBoard;