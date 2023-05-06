import CourseModelMongo from './schema/course.schema';
import connectDatabase from '../createDatabase/createdatabase.mongo';
import { connect } from "mongoose";
import CourseModel from "../../../../domainModel/models/course.model"

const insertManyCourses = async(coursesData:CourseModel[])=>{


    try {

    const dbConn = await connectDatabase(connect);
    const allTheCourses = await  CourseModelMongo.insertMany(coursesData);
    return allTheCourses;
     }
    catch(err){
        console.error("err:", err);
        return false;
    }
    
}


export default insertManyCourses



