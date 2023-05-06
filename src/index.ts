import mysqlDB from "../frameworks/database/mysql/index.mysql";

import mongoDB from "../frameworks/database/mongo/index.mongo";




const callFindAllCoursesMongo = async () => {

   const findAllCourses = mongoDB().courses().findAllCourses();

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

  const insertManyCourses = mongoDB().courses().insertManyCourses();

 const insertCoursesResult = await insertManyCourses(courseData);

 console.log("INSERT  COURSES: ", insertCoursesResult);
};


const callFindAllCoursesMysql = async () => {


  const allCoursesfnc =  mysqlDB().courses().findAllCourses();

  const allCourses = await allCoursesfnc()

  console.log("all courses: ", allCourses);

  //const mySqlObj = mysqlDB().connectDatabase();
  
  //const objConn= await mySqlObj.getMysqlConn();
  //console.log("MYSQL OBJ: ", objConn);
};


//callInsertManyCoursesMongo();
//callFindAllCoursesMongo();

callFindAllCoursesMysql()



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