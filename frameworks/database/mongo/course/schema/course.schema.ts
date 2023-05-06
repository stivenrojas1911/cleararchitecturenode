import { Schema, model } from "mongoose";
import CourseModel from "../../../../../domainModel/models/course.model"

// Course Modal Schema
const courseSchema = new Schema({
  _id: Number,
  name: String,
  category: String
});

// Creating model objects
const CourseMongoModel = model("course", courseSchema);

export default CourseMongoModel;
