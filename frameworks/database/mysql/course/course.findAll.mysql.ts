
import mysqlDB from "../index.mysql";


const findAllCourses = async()=>{


    try {

        const mySqlObj = mysqlDB().connectDatabase();
  
        const objConn= await mySqlObj.getMysqlConn();

        objConn.query("SELECT * FROM courses", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            return result;
          });

     }
    catch(err){
        return false;
    }
    
}

export default findAllCourses;
