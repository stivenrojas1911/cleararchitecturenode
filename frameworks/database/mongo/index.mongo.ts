import connectDatabase from './createDatabase/createdatabase.mongo';
import coursesDB from './course/index/course.index.mongo'


const mongoDB = ()=>{

  return Object.freeze({
    connectDatabase:  () => connectDatabase,
    courses: ()=>coursesDB()
    
  });


};

export default mongoDB;






