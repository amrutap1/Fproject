import axios from 'axios'
const Users ="http://localhost:8000/user/getAllUser";
const Course="http://localhost:8000/user/getAllCourse";
const GRADE="http://localhost:8000/user/getSub";
const ASSIGN="http://localhost:8000/user/getAllAssign";

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
}


export default new StudentService()