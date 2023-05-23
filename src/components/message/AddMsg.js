import React, { Component } from 'react'
import Header from '../Header';
import axios from 'axios';
import eimg from '../Images/zd.jpg';


export default class AddMsg extends Component {
  constructor(props){
    super(props);
    this.state={
        senderId:'',
        recieverId:'',
        content:'',
        timestamp:''
    };
    this.changesenderId=this.changesenderId.bind(this);
    this.changereceiverId=this.changereceiverId.bind(this);
    this.changeContent=this.changeContent.bind(this);
    this.changetimestamp=this.changetimestamp.bind(this);
    this.saveMsg=this.saveMsg.bind(this);
}
saveMsg=async (e)=>{
  let message={
    senderId:this.state.senderId,
    recieverId:this.state.recieverId,
    content:this.state.content,
    timestamp:this.state.timestamp
  }
  alert("Msg Added SuccessFully")
  try {
   const response = await axios.post("http://localhost:8000/user/addMsg",
             message);
 
console.log(response.data);

//   this.props.history.push('./studentApp');
} catch (error) {
console.log(error); // Handle error
}
};
changesenderId=(e)=>{
  this.setState({senderId:e.target.value});
}


changereceiverId=(e)=>{
  this.setState({recieverId:e.target.value});
}

changeContent=(e)=>{
  this.setState({content:e.target.value});
}

changetimestamp=(e)=>{
  this.setState({timestamp:e.target.value});
}
    
  render() {
    return (
      <div className='container' style={{backgroundImage:`url(${eimg})`  , height:'850px' }}>
        
        <div className='container' style={{width:"800px" ,marginTop:'10px'}}>


        <h3 style={{paddingBlock:"20px"}}>MESSAGE BOX</h3>
        <form>

        <label>SENDER ID</label><br></br>
            <input type='number'
             name="senderId"
             className="form-control"
             value={this.state.senderId}
             onChange={this.changesenderId}
             required
             placeholder='Enter SenderId' >
            </input><br></br>

        <label>RECEIVER ID</label><br></br>
            <input type='number'
             name="receiver_id"
             className="form-control"
             value={this.state.recieverId}
             onChange={this.changereceiverId}
             required
             placeholder='Enter ReceiverId' >
            </input><br></br>
            <label>CONTENT</label><br></br>
            <input type='text'
             name="content"
             className="form-control"
             value={this.state.content}
             onChange={this.changeContent}
             required
             placeholder='Enter content' >
            </input><br></br>
            <label>TIME</label><br></br>
            <input type='text'
             name="timestamp"
             className="form-control"
             value={this.state.timestamp}
             onChange={this.changetimestamp}
             required
             placeholder='Enter TIME `2022-02-01T10:00:00.000`' >
            </input><br></br>

            <button type="submit" onClick={this.saveMsg} style={{background:"#A52A2A",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}}>SAVE</button>

        </form>
        <br></br>
        <a href='./viewMsg'>< button style={{background:"#A52A2A",color:"whitesmoke" ,height:"50px" ,width:"210px" , borderRadius:"40px"}}>View Message</button></a>
        </div>
      </div>
    )
  }
}
