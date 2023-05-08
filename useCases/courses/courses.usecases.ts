import databaseBuilder from "../../frameworks/database/index.database";



const callFindAllCourses = async (databaseType:"mongo"|"mysql") => {

    const databaseObj = databaseBuilder().getDatabase(databaseType);
    const findAllCourses = databaseObj().courses().findAllCourses();
  
    const allCourses = await findAllCourses();
  
    console.log("*all courses:", allCourses);
  
    if (allCourses !== false) {
      allCourses.map((course) => {
        console.log("course: ", course.name);
      });
    }
  };

