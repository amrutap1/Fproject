import axios from 'axios'
const Users ="http://localhost:8000/user/getAllUser";
const Course="http://localhost:8000/user/getAllCourse";
const GRADE="http://localhost:8000/user/getSub";
const ASSIGN="http://localhost:8000/user/getAllAssign";
// const  ENROLLSTUDENT="http://localhost:8000/user/addEnroll";
// const login="http://localhost:8000/admin/login"
const CLASSES="http://localhost:8000/user/getAllClass";
const Message="http://localhost:8000/user/getAllMsg";

class StudentService{
    getStudent(){
        return axios.get(Users);
    }
    getCourse(){
        return axios.get(Course);
    }
    getGrade(){
        return axios.get(GRADE);
    }
    getAssign(){
        return axios.get(ASSIGN);
    }
    getClasses(){
        return axios.get(CLASSES);
    }
    
    getMsg(){
        return axios.get(Message);
    }

    // addEnroll(enrollment){
    //     return axios.post(ENROLLSTUDENT,enrollment);
    // }
    
    // login(user){
    //     return axios.post(login,user);
    // }

}


export default new StudentService()