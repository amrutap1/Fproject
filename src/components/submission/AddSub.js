import React, { useState } from 'react';
import axios from 'axios';

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

        
            const response = await axios.post('http://localhost:8000/teacher/addSub', data);
            console.log(response.data);
            alert("submission added successfully");
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>ASSIGNMENT ID:</label>
            <input
                type="number"
                value={assignId}
                onChange={(e) => setAssignId(e.target.value)}
            />

            <label>STUDENT ID:</label>
            <input
                type="number"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
            />
             <label> GRADE</label>
            <input
                type="text"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
            />
            <label>FEEDBACK</label>
            <input
                type="text"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
            />


            <button type="submit">SAVE</button>
        </form>
    );
}

export default AddSub;
