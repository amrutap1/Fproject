import React, { Component } from 'react'
import Header from '../Header'
import StudentService from '../../service/StudentService'
import Navbar from '../../Navbar'
export default class ViewMsg extends Component {
    constructor(props){
        super(props)
        this.state={
            message :[]
        }
        this.listGrade=this.listGrade.bind(this);
      }
    
      listGrade(){
        this.props.history.push('/')
      }
      
      componentDidMount(){
        StudentService.getMsg().then((res)=>{
            this.setState({
              message : res.data
            });
        });
      }
  render() {
    return (
      <div>
          <Navbar></Navbar>
        <h2 style={{alignContent:"center",fontFamily:"sans-serif", marginTop:"50px",marginLeft:"190px"}}>MESSAGE BOX</h2>
        <div className='container' style={{width:"1000px", marginTop:"10px"}}>
         
        {/* <table className="table table-striped " align='center' >
          <thead >
            <tr>
            <td>Id</td>
            <td>SenderId</td>
            <td>ReceiverId</td>
            <td>content</td>
            <td>Timestamp</td>
          </tr></thead>
          <tbody>
            {
              this.state.message.map(
                st=>
                // console.log(st)
                <tr key={st.msgId}> 
                <td>{st.msgId}</td>
                <td>{st.user.id}</td>
                <td>{st.user.id}</td>
                <td>{st.content}</td>
                <td>{st.timestamp}</td>
                </tr>
              )
            }
          </tbody>
      </table>
    {     */}

<div className="row row-cols-2 row-cols-md-3 g-4" style={{width:"1200px"}}>
    {this.state.message.map((st) => (
      <div className="card" align="">
      <div className="card-header">
       <b>Messages</b> 
      </div>
      <div className="card-body">
      <div className="card mb-6" key={st.msgId}>
        <div className="card-body" style={{boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'}}>
          <h5 className="card-title">Message Id: {st.msgId}</h5>
          <p className="card-text">Sender ID: {st.user.id}</p>
          <p className="card-text">Receiver ID: {st.user.id}</p>
          <p className="card-text">Content: {st.content}</p>
          <p className="card-text">Time: {st.timestamp}</p>
        </div>
      </div>
      

 </div>
        </div>

    ))}
    </div>
  </div>
</div>
    )
  }
}
