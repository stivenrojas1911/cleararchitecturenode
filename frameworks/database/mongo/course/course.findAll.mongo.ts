import CourseModelMongo from './schema/course.schema';
import connectDatabase from '../createDatabase/createdatabase.mongo';
import { connect } from "mongoose";

const findAllCourses = async()=>{


    try {

    const dbConn = await connectDatabase(connect);
    const allTheCourses = await  CourseModelMongo.find({});
    return allTheCourses;
     }
    catch(err){
        return false;
    }
    
}


export default findAllCourses

