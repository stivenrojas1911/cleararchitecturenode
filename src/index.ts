import mysqlDB from "../frameworks/database/mysql/index.mysql";
import mongoDB from "../frameworks/database/mongo/index.mongo";
import databaseBuilder from "../frameworks/database/index.database";



const callFindAllCoursesMongo = async () => {

  const databaseObj = databaseBuilder().getDatabase("mongo");
  const findAllCourses = databaseObj().courses().findAllCourses();

  const allCourses = await findAllCourses();

  console.log("*all courses:", allCourses);

  if (allCourses !== false) {
    allCourses.map((course:{
      id:number,
      category:string,
      name:string
    }) => {
      console.log("course name: ", course.name);
    });
  }
};

const callFindAllCoursesMysql = async () => {
  const allCoursesfnc = mysqlDB().courses().findAllCourses();

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

  const insertManyCourses = mongoDB().courses().insertManyCourses();

  const insertCoursesResult = await insertManyCourses(courseData);

  console.log("INSERT  COURSES: ", insertCoursesResult);
};

//callInsertManyCoursesMongo();
//callFindAllCoursesMysql()

callFindAllCoursesMongo();
