import React, { Component } from 'react'
import StudentService from '../service/StudentService'
import Header from './Header';
import Navbar from '../Navbar';
export default class  extends Component {
  constructor(props){
    super(props)
    this.state={
        user :[]
    }
    this.list=this.list.bind(this);
  }

  list(){
    this.props.history.push('/')
  }
  
  componentDidMount(){
    StudentService.getStudent().then((res)=>{
        this.setState({
          user : res.data
        });
    });
  }
    render() {
    return (
      <div >
       <Navbar></Navbar>
        <div className='container' style={{width:"1200px" ,marginTop:'50px',height:"800px"}}>
        <h1>LIST STUDENT</h1><br></br>
        <table className="table table-striped" style={{marginLeft:'100px',width:"700px"}} >
          <thead>
            <tr>
            <th>ID</th>
            <th>STUDENT NAME</th>
            {/* <td>password</td> */}
          </tr></thead>
          <tbody>
            {
              this.state.user.map(
                st=>
                <tr key={st.id}>
                <td>{st.id}</td>
                <td>{st.userName}</td>
                {/* <td>{st.password}</td> */}
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
