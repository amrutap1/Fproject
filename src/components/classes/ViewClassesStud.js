import React, { Component } from 'react'
import StudentService from '../../service/StudentService';
import Header from '../Header';
// import { Button } from 'bootstrap';

export default class ViewClassesStud extends Component {
    constructor(props){
        super(props)
        this.state={
            classes :[]
        }
        this.listClass=this.listClass.bind(this);
        //  this.deleteClass = this.deleteClass.bind(this);
      }

      listClass(){
        this.props.history.push('/')
      }

    

       
      componentDidMount(){
        StudentService.getClasses().then((res)=>{
            this.setState({
              classes : res.data
            });
        });
      }
  render() {
    return (
      <div className='container'>
         <Header></Header>
         <h2 style={{alignContent:"center",fontFamily:"sans-serif", marginTop:"50px",marginLeft:"450px"}}>CLASSES</h2>
       
         <div className='container' style={{width:"800px", marginTop:"10px"}}>
        <table className="table table-striped table-bordered" >
          <thead>
            <tr>
            <td>Class Id</td>
            <td>Teacher Id</td>
            <td>Course Id</td>
            <td>Start Time</td>
            <td>End Time</td>
            {/* <td>Action</td> */}
          </tr></thead>
          <tbody>
            {
              this.state.classes.map(
                st=>
                // console.log(st)
                <tr key={st.classId}> 
                <td>{st.classId}</td>
                <td>{st.user.id}</td>
                <td>{st.course.courseId}</td>
                <td>{st.startTime}</td>
                <td>{st.endTime}</td>
               {/* <td> <Button onClick={() => this.deleteClass(st.classId)}  style={{background:"purple",color:"whitesmoke" ,height:"40px" ,width:"100px" , borderRadius:"40px",border:"none"}}>Delete</Button></td> */}
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
  