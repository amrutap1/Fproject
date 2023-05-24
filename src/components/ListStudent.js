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
      <div className='container'>
       <Navbar></Navbar>
        <div className='container' style={{width:"800px" ,marginTop:'50px'}}>
        <h1>LIST STUDENT</h1>
        <table className="table table-striped table-bordered" >
          <thead>
            <tr>
            <td>ID</td>
            <td>STUDENT NAME</td>
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
