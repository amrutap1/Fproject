import React, { Component } from 'react'
import Header from '../Header'
import StudentService from '../../service/StudentService'
export default class ViewGrades extends Component {
    constructor(props){
        super(props)
        this.state={
            submission :[]
        }
        this.listGrade=this.listGrade.bind(this);
      }
    
      listGrade(){
        this.props.history.push('/')
      }
      
      componentDidMount(){
        StudentService.getGrade().then((res)=>{
            this.setState({
              submission : res.data
            });
        });
      }
  render() {
    return (
      <div className='container'>
        <Header></Header>
        <table className="table table-striped table-bordered" >
          <thead>
            <tr>
            <td>id</td>
            <td>Feedback</td>
            <td>Grade</td>
            <td>StudeniID</td>
            <td>AssignId</td>
          </tr></thead>
          <tbody>
            {
              this.state.submission.map(
                st=>
                // console.log(st)
                <tr key={st.subId}> 
                <td>{st.subId}</td>
                <td>{st.feedback}</td>
                <td>{st.grade}</td>
                <td>{st.user.id}</td>
                <td>{st.assignment.assignId}</td>
                </tr>
              )
            }
          </tbody>
      </table>
        

        
      </div>
    )
  }
}
