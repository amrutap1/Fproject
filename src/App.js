import ListStudent from "./components/ListStudent";
import StudentApp from "./components/StudentApp";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ViewsCourse from "./components/courses/ViewsCourse";
import ViewGrades from "./components/Grades/ViewGrades";
import ViewAssign from "./components/assignment/ViewAssign";
import Login from "./components/Login";
import CourseEnroll from "./components/StudentEnroll/CourseEnroll";
import AddAssign from "./components/assignment/AddAssign";
import Register from "./components/Register";
import AddMsg from "./components/message/AddMsg";
import TeacherApp from "./components/TeacherApp";
import AddSub from "./components/submission/AddSub";
import ViewClass from "./components/classes/ViewClass";
import ViewClassesStud from "./components/classes/ViewClassesStud";
import ViewAssignStud from "./components/assignment/ViewAssignStud";
function App() {
  return (
  <div>
    <Router>
      <Switch>
          <Route path='/'  exact component={Register}></Route>
          {/* <Route path='/login' exact component={Login}></Route> */}
          <Route path='/StudentApp' exact component={StudentApp}></Route>
          <Route path='/TeacherApp' exact component={TeacherApp}></Route>
          <Route path='/listStudent' exact component={ListStudent}></Route> 
          <Route path='/viewCourse' exact component={ViewsCourse}></Route>
          <Route path='/viewGrade' exact component={ViewGrades}></Route>
          <Route path='/viewAssign' exact component={ViewAssign}></Route>
          <Route path='/courseEnroll' exact component={CourseEnroll}></Route>
          <Route path='/addAssign' exact component={AddAssign}></Route>
          <Route path='/addMsg' exact component={AddMsg}></Route>
          <Route path='/addSub' exact component={AddSub}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/viewClass' exact component={ViewClass}></Route> 
          <Route path='/viewClassStud' exact component={ViewClassesStud}></Route>
          <Route path='/viewAssignStud' exact component={ViewAssignStud}></Route>
       </Switch>
       {/* <CourseEnroll></CourseEnroll> */}
        </Router>
        
  </div>
  );
}

export default App;
