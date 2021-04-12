import {useState,useEffect} from 'react';
// This Timer Currently shows system time. Modify it Accordingly
const Timer  = ()=>{

    // let getdate = new Date()
    
    useEffect(()=>{
        setInterval(() => {
            setDate(new Date())
        },1000)
    })

    const [getdate,setDate] = useState(new Date())
    return (
        <>
        <h1>This CTF will start in '(Hours: Minutes : Seconds)' : </h1>
        <h1>{getdate.getHours()} : {getdate.getMinutes()} : {getdate.getSeconds()}</h1>
        </>
    )
}

export default Timer