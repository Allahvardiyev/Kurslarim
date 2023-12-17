 import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Courses from './Courses';
import Loading from './Loading';
function App() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const deleteCourse=(id)=>{
  const afterDeleteCourses=courses.filter((course)=>course.id!==id);
  setCourses(afterDeleteCourses)
  }
  const fetchCourses=async()=>{
    setLoading(true)
    try{
      const response=await axios.get('  http://localhost:3000/courses ');
      setCourses(response.data)
      setLoading(false)
    }
    catch(error){
      setLoading(false)
    }
    
  }
  useEffect(()=>{
  fetchCourses()
  },[])
  return (
    <div className="App">
      {loading? (
        <Loading/>
      ):(
        <>
         {
        courses.length===0 ?(
          <div className='refleshDiv'>
        <h2>Kurslarin hamsini sildin!</h2>
        <button className='cardDeleteBtn' onClick={()=>fetchCourses( )}>Yenilə</button>
          </div>
        ):(
        <Courses courses={courses} removeCourses={deleteCourse}/>
        )}
        </>
       
        
      )}
     
    </div>
  ); 
}

export default App;
