import { Schema, model } from "mongoose";
import StudentModel from "../../../../domainModel/models/student.model"

// Student Modal Schema
const studentSchema = new Schema({

  student:StudentModel
 
});

// Creating model objects

const Student = model("student", studentSchema);

export default Student;
