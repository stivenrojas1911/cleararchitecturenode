"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_mysql_1 = __importDefault(require("../frameworks/database/mysql/index.mysql"));
const index_mongo_1 = __importDefault(require("../frameworks/database/mongo/index.mongo"));
const callFindAllCoursesMongo = async () => {
    const findAllCourses = (0, index_mongo_1.default)().courses().findAllCourses();
    const allCourses = await findAllCourses();
    console.log("ALL THE COURSES: ", allCourses);
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
const callFindAllCoursesMysql = async () => {
    const mySqlObj = (0, index_mysql_1.default)().connectDatabase();
    const objConn = await mySqlObj.getMysqlConn();
    console.log("MYSQL OBJ: ", objConn);
};
//callInsertManyCoursesMongo();
//callFindAllCoursesMongo();
callFindAllCoursesMysql();
/**

const connectMysql = async () => {
  const respConnFnc = await connectDatabase(
    "localhost",
    "root",
    "",
    "high_school",
    "3306"
  );

  const objConn = respConnFnc.createConnObj();

  console.log("objConn: ", objConn);

  objConn.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });

  objConn.pause();


  objConn.query("SELECT * FROM persons", function (err, result) {
    if (err) throw err;
    console.log("*Result: " + result);
  });
};

//connectMysql();
 */ 
//# sourceMappingURL=index.js.map