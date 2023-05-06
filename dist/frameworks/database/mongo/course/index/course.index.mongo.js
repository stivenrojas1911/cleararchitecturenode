"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const course_findAll_mongo_1 = __importDefault(require("../course.findAll.mongo"));
const course_insertMany_mongo_1 = __importDefault(require("../course.insertMany.mongo"));
const coursesDB = () => {
    return Object.freeze({
        findAllCourses: () => course_findAll_mongo_1.default,
        insertManyCourses: () => course_insertMany_mongo_1.default
    });
};
exports.default = coursesDB;
//# sourceMappingURL=course.index.mongo.js.map