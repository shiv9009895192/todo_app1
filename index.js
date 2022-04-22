let v = document.getElementById('show')
let ar = []
var allTask = JSON.parse(localStorage.getItem('key')) || []
var al = false
var index = null

window.addEventListener("keypress", add1, false);
function add1(Key) {
  if (Key.keyCode == 13) {
    add()
  }
}

function add() {
  var x = document.getElementById('input').value;
  if (x.length > 0 && al === false) {
    if (allTask == null) {
      allTask = ' ';
    }
    allTask.push(x)
  }
  else if (al === true && x.length > 0 && index !== null) {
    allTask.splice(index, 1, x)
    al = false
    index = null
  }
  localStorage.setItem('key', JSON.stringify(allTask));
  // showData()
  searchfun();
  document.getElementById('input').value = ''
  var t = document.getElementById("myButton");
  if (t.value == "Edit") {
    t.value = "Add New Task";
  }
  input=''
}

function showData() {
  let localData = JSON.parse(localStorage.getItem("key"))
  ml = "<table class='tableborder' >"
  localData.forEach((el, i) => {
    ml += `<ul class='tablebr'>
 <Text class='jstxt'><div class='javascriptel'>${el}</div></Text>
 <button class='btn1' onclick='del(${i})'>Remove</button>
 <input type="button" class="btn2" id="btn2" value="Edit"onclick="edit(${i});">
 </ul>`
  });
  v.innerHTML = ml;
}
// showData();

function searchfun() {
  let input = document.getElementById('myinput').value;
  mll = "<table class='tableborder' >"
  let newArr = [];
  allTask.forEach((e, i) => {
    if (e.includes(input)) {
      newArr.push(e);
    }
  });
  if (newArr.length) {
    newArr.forEach((e, i) => {
      mll += `<ul class='tablebr'>
    <Text class='jstxt'><div class='javascriptel'>${e}</div></Text>
    <button class='btn1' onclick='del(${i})'>Remove</button>
    <input type="button" class="btn2" id="btn2" value="Edit"onclick="edit(${i});">
    </ul>`
    })

  }
  else {
    mll = "no data found"
  }
  v.innerHTML = mll;

  }
  
  function del(i) {
    allTask.splice(i, 1)
    add()
  if(allTask.length<1){
  clearall();
  }
  }
  
  function edit(i) {
    var r = document.getElementById('input').value = allTask[i]
    index = i;
    al = true
  
    var t = document.getElementById("myButton");
    if (t.value == "Add New Task") {
      t.value = "Edit";
  
    }
  }

function clearall() {
  allTask.splice(0)
  add()
  v.innerHTML = ''
}

