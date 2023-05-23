import React, { Component } from 'react'
import Header from '../Header'
import StudentService from '../../service/StudentService'
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
      <div className='container'>
        <Header></Header>
        <h2 style={{alignContent:"center",fontFamily:"sans-serif", marginTop:"50px",marginLeft:"450px"}}></h2>
        <div className='container' style={{width:"800px", marginTop:"10px"}}>
         
        <table className="table table-striped table-bordered" align='center' >
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
        

        </div>
      </div>
    )
  }
}
