import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../Navbar';

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
            const response = await axios.post('http://localhost:8000/user/addSub', data);
            console.log(response.data);
            alert("FeedBack added successfully");
            window.location.reload();
        }catch{
            alert("Enter Proper Student Id")
        }
        
    };

    return (
        <div>
            <Navbar></Navbar>
        <div className='container'   style={{ height:'850px' }}>
         <div className='container'  style={{width:"700px" ,height:'700px',marginTop:'40px',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'}} >
         <h3 style={{paddingBlock:"20px"}}>ADD FEEDBACK</h3>
        <form onSubmit={handleSubmit} >
            <label>ASSIGNMENT ID:</label><br></br>
            <input
                type="number"
                value={assignId}
                onChange={(e) => setAssignId(e.target.value)}
                className="form-control"
                required
                placeholder='Enter Assign Id'
            /><br></br>

            <label>STUDENT ID:</label><br></br>
            <input
                type="number"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="form-control"
                required
                placeholder='Enter Student Id'
            /><br></br>
             <label> GRADE</label><br></br>
            <input
                type="text"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                className="form-control"
                required
                placeholder='Enter grade'
            /><br></br>
            <label>FEEDBACK</label><br></br>
            <input
                type="text"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="form-control"
                required
                placeholder='Enter Feedback'
            /><br></br>

<br></br>
            <button type="submit" style={{background:"black",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}}>SAVE</button>
        </form>
        </div></div></div>
    );
}


export default AddSub;
