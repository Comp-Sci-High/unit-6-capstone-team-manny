const mongoose = require("mongoose");
const express = require("express");
const { name } = require("ejs");

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(express.json());

app.set("view engine", "ejs");

app.use((req, res, next) => {
  console.log(`${req.method}: ${req.path}`);
  next();
});

const classSchema = new mongoose.Schema(
  {
    period: {type:Number, required:true},
    class: {type:String, required: true},
    coTeacher: {type:Boolean, require:true}
  }
)

const Class = mongoose.model("Class", classSchema, "Classes");

const teacherSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    subject: { type: String ,required:true} ,
    image: { type: String ,required:true} ,
    classes: [classSchema]
  },
);

const Teacher = mongoose.model("Teacher", teacherSchema, "Teachers");

const absentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    subject: { type: String, required:true} ,
    classes: [classSchema]
  },
);

const Absent = mongoose.model("Absent", absentSchema, "Absents");

app.get("/", async (req, res) => {
  res.send("index.html");
});
app.get("/absent", async (req, res) => {
  res.sendFile(__dirname + "/public/absent.html");
});
app.get("/coverage", async (req, res) => {
  const absences = await Absent.find({ });
  res.render("coverage.ejs",{absences});
});
app.get("/teachers", async (req, res) => {
  const teachers = await Teacher.find({ });
  res.render("teachers.ejs", { teachers });
});

app.post("/add/teacher", async (req, res) => {
  const newTeacher = await new Teacher({
    name: req.body.name,
    subject: req.body.subject,
  }).save();

  res.json(newTeacher);
});

app.post("/absent/teacher", async (req, res) => {
  const absent = await Teacher.find({name: req.body.first})
  const absentTeacher = await new Absent({
    name: absent.body.name,
    subject: absent.body.subject,
    classes: absent.body.classes
  }).save();
  res.json(absentTeacher);
});


// Add your SRV string, make sure that the database is called CSHteachers
async function startServer() {
  await mongoose.connect("mongodb+srv://SE12:CSH2025@cluster0.bwhqw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

  app.listen(3000, () => {
    console.log(`Server running.`);
  });
}

startServer();
