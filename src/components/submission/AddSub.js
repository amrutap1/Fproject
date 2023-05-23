import React, { useState } from 'react';
import axios from 'axios';

import eimg from '../Images/zd.jpg'

function AddSub() {
    const [assignId, setAssignId] = useState('');
    const [studentId, setStudentId] = useState('');
    const[grade,setGrade]=useState('');
    const [feedback,setFeedback]=useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            assignId,
            studentId,
            grade,
            feedback
        };

        try{
            const response = await axios.post('http://localhost:8000/teacher/addSub', data);
            console.log(response.data);
            alert("submission added successfully");
            window.location.reload();
        }catch{
            alert("Enter Proper Student Id")
        }
        
    };

    return (
        <div className='container'   style={{backgroundImage:`url(${eimg})`  , height:'850px' }}>
         <div className='container'  style={{width:"500px" ,marginTop:'50px' }} >
         <h3 style={{paddingBlock:"20px"}}>ADD FEEDBACK</h3>
        <form onSubmit={handleSubmit} >
            <label>ASSIGNMENT ID:</label><br></br>
            <input
                type="number"
                value={assignId}
                onChange={(e) => setAssignId(e.target.value)}
            /><br></br>

            <label>STUDENT ID:</label><br></br>
            <input
                type="number"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
            /><br></br>
             <label> GRADE</label><br></br>
            <input
                type="text"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
            /><br></br>
            <label>FEEDBACK</label><br></br>
            <input
                type="text"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
            /><br></br>

<br></br>
            <button type="submit" style={{background:"#A52A2A",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}}>SAVE</button>
        </form>
        </div></div>
    );
}


export default AddSub;
