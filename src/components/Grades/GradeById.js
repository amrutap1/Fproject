import React, { Component } from 'react';
import axios from 'axios';

class GradeById extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId: '',     // Student ID input field value
      submission: []
    };
  }

  handleChange = event => {
    this.setState({ studentId: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { studentId } = this.state;
    this.fetchGrades(studentId);
  };

  fetchGrades = studentId => {
    axios.get(`http://localhost:8000/user/${studentId}/grades`)
      .then(response => {
        this.setState({ submission: response.data });
      })
      .catch(error => {
        console.error('Error fetching grades:', error);
      });
  };

  render() {
    const { studentId, submission } = this.state;

    return (
      <div>
        <h1>Grades and Feedback</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Student ID:
            <input type="text" value={studentId} onChange={this.handleChange} />
          </label>
          <button type="submit">Fetch Grades</button>
        </form>
        {submission.length > 0 ? (
          submission.map(grade => (
            <div key={grade.id}>
              <p>Grade: {grade.grade}</p>
              <p>Feedback: {grade.feedback}</p>
            </div>
          ))
        ) : (
          <p>No grades found for the specified student ID.</p>
        )}
      </div>
    );
  }
}

export default GradeById;
