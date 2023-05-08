"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_mysql_1 = __importDefault(require("../frameworks/database/mysql/index.mysql"));
const index_mongo_1 = __importDefault(require("../frameworks/database/mongo/index.mongo"));
const index_database_1 = __importDefault(require("../frameworks/database/index.database"));
const callFindAllCoursesMongo = async () => {
    const databaseObj = (0, index_database_1.default)().getDatabase("mongo");
    const findAllCourses = databaseObj().courses().findAllCourses();
    const allCourses = await findAllCourses();
    console.log("*all courses:", allCourses);
    if (allCourses !== false) {
        allCourses.map((course) => {
            console.log("course name: ", course.name);
        });
    }
};
const callFindAllCoursesMysql = async () => {
    const allCoursesfnc = (0, index_mysql_1.default)().courses().findAllCourses();
    const allCourses = await allCoursesfnc();
    console.log("all courses: ", allCourses);
};
const callInsertManyCoursesMongo = async () => {
    const courseData = [
        {
            _id: 7,
            name: "Redux",
            category: "Frontend",
        },
        {
            _id: 8,
            name: "css",
            category: "Frontend",
        },
    ];
    const insertManyCourses = (0, index_mongo_1.default)().courses().insertManyCourses();
    const insertCoursesResult = await insertManyCourses(courseData);
    console.log("INSERT  COURSES: ", insertCoursesResult);
};
//callInsertManyCoursesMongo();
//callFindAllCoursesMysql()
callFindAllCoursesMongo();
//# sourceMappingURL=index.js.map