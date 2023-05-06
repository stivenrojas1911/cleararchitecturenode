"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Course Modal Schema
const courseSchema = new mongoose_1.Schema({
    _id: Number,
    name: String,
    category: String
});
// Creating model objects
const CourseMongoModel = (0, mongoose_1.model)("course", courseSchema);
exports.default = CourseMongoModel;
//# sourceMappingURL=course.schema.js.map