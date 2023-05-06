import { Schema, model } from "mongoose";
import TeacherModel from "../../../../domainModel/models/teacher.model";


// Teacher Modal Schema
const teacherSchema = new Schema({

  teacher:TeacherModel,

});

// Creating model objects

const Teacher = model("teacher", teacherSchema);

// Exporting our model objects
export default Teacher;
