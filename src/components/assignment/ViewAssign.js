import React, { Component } from 'react'
import StudentService from '../../service/StudentService';
import Header from '../Header';
export default class ViewAssign extends Component {
    constructor(props){
        super(props)
        this.state={
            assignment :[]
        }
        this.listAssign=this.listAssign.bind(this);
      }

      listAssign(){
        this.props.history.push('/')
      }
      
      componentDidMount(){
        StudentService.getAssign().then((res)=>{
            this.setState({
              assignment : res.data
            });
        });
      }
  render() {
    return (
      <div className='container'>
         <Header></Header>
         <h2 style={{alignContent:"center",fontFamily:"sans-serif", marginTop:"50px",marginLeft:"450px"}}>ASSIGNMENTS </h2>
       
         <div className='container' style={{width:"800px", marginTop:"10px"}}>
        <table className="table table-striped table-bordered" >
          <thead>
            <tr>
            <td>Id</td>
            <td>Course Id</td>
            <td>Name</td>
            <td>Due Date</td>
          </tr></thead>
          <tbody>
            {
              this.state.assignment.map(
                st=>
                // console.log(st)
                <tr key={st.assignId}> 
                <td>{st.assignId}</td>
                <td>{st.course.courseId}</td>
                <td>{st.assignName}</td>
                <td>{st.dueDate}</td>
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

