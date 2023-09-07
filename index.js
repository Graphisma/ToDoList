import express from "express";
import bodyParser from "body-parser";

const todos = [{
  todotask: "Be effective!",
}
];

const todostoday = [{
  todotasktoday: "Have a nice day!",
}
];



import jsdom from "jsdom";
const dom = new jsdom.JSDOM("<!DOCTYPE html><body></body>");
const window = dom.window;
import $ from "jquery";

const app = express();
const port = 3000;

//---------------------------DATES------------------------------------------------------------------------------------------------------//

var monthOfTheYear = ["January","February","March","April","May","June","July", "August","September","October","November","December"];
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//-----------------------------------------------GET,POST---------------------------------------------------------------------------------------------//

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    const today = new Date();
    var d = today.getDate();
    var wd = weekDays[today.getDay()];
    var m = monthOfTheYear[today.getMonth()];
    var bg = "/img/todobg_2.jpg";
    var inactiveButtonToday = "/img/today_inactive.png";
    var activeButtonWork = "/img/work_active.png";
    var thisYear = today.getFullYear();
    res.render("index.ejs", {
        weekDay: wd,
        day: d,
        month: m,
        background: bg,
        buttonToday: inactiveButtonToday,
        buttonWork: activeButtonWork,
        year: thisYear
    })
});

app.get("/today", (req, res) => {
  const today = new Date();
  var d = today.getDate();
  var wd = weekDays[today.getDay()];
  var m = monthOfTheYear[today.getMonth()];
  var bg1 = "/img/todobg_1.jpg";
  var activeButtonToday = "/img/today_active.png";
  var inactiveButtonWork = "/img/work_inactive.png";
  var thisYear = today.getFullYear();
  
  res.render("today.ejs", {
    weekDay: wd,
    day: d,
    month: m,
    background: bg1,
    buttonToday: activeButtonToday,
    buttonWork: inactiveButtonWork,
    year: thisYear,
    data: todostoday
})
});

app.get("/tasks", (req, res) => {
  var bg2 = "/img/todobg_2.jpg"
  var inactiveButtonToday = "/img/today_inactive.png";
  var activeButtonWork = "/img/work_active.png";
  const today = new Date();
  var thisYear = today.getFullYear();
  res.render("tasks.ejs", {
    background: bg2,
    buttonToday: inactiveButtonToday,
    buttonWork: activeButtonWork,
    year: thisYear,
    data: todos
  });
});


app.post("/tasks", (req, res) => {
  var bg2 = "/img/todobg_2.jpg"
  var inactiveButtonToday = "/img/today_inactive.png";
  var activeButtonWork = "/img/work_active.png";
  const today = new Date();
  var thisYear = today.getFullYear();
  var newTask = req.body.task;
  todos.push({
    todotask: newTask
  });
 
  res.render("tasks.ejs", {
    background: bg2,
    buttonToday: inactiveButtonToday,
    buttonWork: activeButtonWork,
    year: thisYear,
    newtask: newTask,
    data: todos
  });

});

app.post("/today", (req, res) => {
  var bg1 = "/img/todobg_1.jpg";
  var activeButtonToday = "/img/today_active.png";
  var inactiveButtonWork = "/img/work_inactive.png";
  const today = new Date();
  var thisYear = today.getFullYear();
  var newTaskToday = req.body.todaytask;

  todostoday.push({
    todotasktoday: newTaskToday
  });
 
  res.render("today.ejs", {
    background: bg1,
    buttonToday: activeButtonToday,
    buttonWork: inactiveButtonWork,
    year: thisYear,
    newtask: newTaskToday,
    data: todostoday
  });

});





app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});