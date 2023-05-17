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
        <h2 style={{alignContent:"center",fontFamily:"sans-serif", marginTop:"50px",marginLeft:"450px"}}>GRADES </h2>
        <div className='container' style={{width:"800px", marginTop:"10px"}}>
         
        <table className="table table-striped table-bordered" align='center' >
          <thead >
            <tr>
            <td>Id</td>
            <td>Feedback</td>
            <td>Grade</td>
            <td>Student Id</td>
            <td>Assign Id</td>
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
      </div>
    )
  }
}
