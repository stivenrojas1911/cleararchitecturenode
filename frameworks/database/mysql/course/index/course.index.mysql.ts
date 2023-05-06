import findAllCourses from '../course.findAll.mysql'


const coursesDB = ()=>{

    return Object.freeze({
      findAllCourses:  () => findAllCourses
     
    });
  
  
  }

export default coursesDB;


