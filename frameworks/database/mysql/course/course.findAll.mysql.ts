
import mysqlDB from "../index.mysql";


const findAllCourses = async()=>{


    try {

        const mySqlObj = mysqlDB().connectDatabase();
  
        const objConn= await mySqlObj.getMysqlConn();

        const getAllTheCourses = async ():Promise<any[]>=>{

            return new Promise<any[]>((resolve, reject) =>{
                objConn.query("SELECT * FROM courses", function (err, result, fields) {
                    if (err) throw err;
                    console.log("result: ", result);
                    resolve(result);
                    
                  });
            })


        }

        const allTheCourses = await getAllTheCourses();

        return allTheCourses;

       

     }
    catch(err){
        return false;
    }
    
}

export default findAllCourses;
