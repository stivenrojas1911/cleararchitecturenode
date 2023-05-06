import findAllCourses from '../course.findAll.mongo'
import insertManyCourses from '../course.insertMany.mongo'

const coursesDB = ()=>{

    return Object.freeze({
      findAllCourses:  () => findAllCourses,
      insertManyCourses: ()=> insertManyCourses
      
    });
  
  
  }

  


  export default coursesDB;