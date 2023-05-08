import MysqlClass from './createDatabase/createdatabase.mysql';
import coursesDB from '../mysql/course/index/course.index.mysql'
 

const mysqlDB = ()=>{//

  return Object.freeze({
    connectDatabase:  () => MysqlClass,
    courses: ()=>coursesDB()

    
    
  });


};

export default mysqlDB;









