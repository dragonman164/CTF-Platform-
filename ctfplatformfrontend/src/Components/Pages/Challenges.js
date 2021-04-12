import {Button} from 'react-bootstrap';
import ChallengeCard from '../ChallengeCard';

const Challenges = ()=>{

    return (
        <>
       <div className="container bg-dark text-light my-3 py-5">
           <h1 className="my-3">Start Solving your Challenges and win exciting prizes!!!</h1>
       

       <h3 className="my-4">Category of the Challenge</h3>
    

        <div className="row mx-3">
        <ChallengeCard/>
        <ChallengeCard/>
        <ChallengeCard/>
        </div>

        

       </div>


        </>
    )

}


export default Challenges;