const fs = require("fs");
const { age, date } = require("./utils");
const teacherData = require("./data.json");

//create teacher
exports.post = (req, res) => {
  const keys = Object.keys(req.body);

  for (key of keys) {
    if (req.body[key] == "") {
      return res.send("Please fill all fields");
    }
  }

  //now we need to create variables for our form fields to save data

  let { avatar, teacher, birthdate, education, classType, subjects } = req.body;

  //we need to create an unique id and use the number constructor to make sure the value passed is a true number

  const id = Number(teacherData.teachers.length + 1);
  const created_at = Date.now();
  birthdate = Date.parse(birthdate);

  //then we need tp push all the data into the json file
  teacherData.teachers.push({
    id,
    avatar,
    teacher,
    birthdate,
    education,
    classType,
    subjects,
    created_at,
  });

  //now we need to format the data to parse it into JSON

  fs.writeFile("data.json", JSON.stringify(teacherData, null, 2), (err) => {
    if (err) return res.send("Info not saved!");

    return res.redirect("/teachers");
  });
};

//show teacher

exports.show = (req, res) => {
  const { id } = req.params;

  const foundTeacher = teacherData.teachers.find((teacher) => {
    return teacher.id == id;
  });

  if (!foundTeacher) return res.send("Teacher not found");

  const teacher = {
    ...foundTeacher,
    birthdate: age(foundTeacher.birthdate),
    subjects: foundTeacher.subjects.split(","),
    created_at: new Intl.DateTimeFormat("pt-BR").format(
      foundTeacher.created_at
    ),
  };

  return res.render("teachers/teacher", { teacher });
};

//edit teacher
exports.edit = (req, res) => {
  const { id } = req.params;

  const foundTeacher = teacherData.teachers.find((teacher) => {
    return teacher.id == id;
  });
  if (!foundTeacher) {
    return res.send("Teacher not found");
  }

  const teacher = {
    ...foundTeacher,
    birthdate: date(foundTeacher.birthdate),
  };

  return res.render("teachers/edit", { teacher });
};
