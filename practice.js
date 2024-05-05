/*

///****************************array input taking and sum****************************

const array = new Array(5);
for(var i=1;i<=5;i++)
{
	
	array[i] = parseInt(prompt("Enter the number"));
}
var sum=0;
for(var i=1;i<=5;i++)
{
	sum+=array[i];
}
document.write("The sum of the total array is: " + sum + "<br>");*/

/*

///****************************array library****************************

var names = ["proyash","rajib","arnab","saurab"];
console.log(names);
names.shift();
names.sort();
document.write(names + "<br>");
names.unshift("imran");
names.sort();
document.write(names + "<br>");
names.splice(2,1,"Karim");
console.log(names);
names.splice(2,3);
names.sort();
names.reverse();
document.write(names);*/

/*

///****************************number sorting****************************

var num=[10,9,8,7,6,5,4,3,2,1];
num.sort(function(a,b){
	return a-b;
})
document.write(num+"<br>");
num.sort(function(a,b){
	return b-a;
})
document.write(num);*/

/*
///****************************1D Array****************************

function highestScore(ar)
{
	var max = ar[1];
	for(var i=2;i<=5;i++)
	{
		if(ar[i]>max)
		{
			max=ar[i];
		}
	}
	return max;
}
var ar = new Array(5);
for(var i=1;i<=5;i++)
{
	ar[i] = parseInt(prompt("Enter the values"));
}
var maxScore = highestScore(ar);
document.write("Maximum score is: " + maxScore);*/


/*
///****************************2D Array****************************

function highestResult(student)
{
	var Highstudent = student[0][0];
	var Highresult = student[0][1];

	for(var i=1;i<student.length;i++)
	{
		if(Highresult<student[i][1])
		{
			Highresult = student[i][1];
			Highstudent = student[i][0];
		}
	}
	return Highstudent;
}


var student = [["x",21],["y",22],["z",23],["m",24],["n",25],];

var BrilliantStudent  = highestResult(student);
document.write("Brilliant student is " + BrilliantStudent);*/

/*
///****************************Create constructor and object****************************

function Student(name,age,cgpa,lang){
	this.name = name;
	this.age = age;
	this.cgpa = cgpa;
	this.lang = lang;

	this.display = function()
	{
	  document.write(this.name + " ");
	  document.write(this.age + " ");
	  document.write(this.cgpa + " ");
	  document.write(this.lang + " ");
	}

}
var st1 = new Student("sazida",21,3.95,"english");
var st2 = new Student("sani",21,3.95,"english");
var st3 = new Student("sanzida",21,3.95,"english");
st1.display();
document.write("<br>");
st2.display();
document.write("<br>");
st3.display();
document.write("<br>");*/


/*
///****************************math object****************************

document.write(Math.sqrt(25)+"<br>");
document.write(Math.abs(-12)+"<br>");
document.write(Math.sign(90)+"<br>");
document.write(Math.pow(3,4)+"<br>");
document.write(Math.floor(4.8)+"<br>");
document.write(Math.ceil(2.5)+"<br>");
document.write(Math.round(4.5)+"<br>");
document.write(Math.max(1,2,4,6,-7)+"<br>");
document.write(Math.min(4,2,1,3,-1)+"<br>");
document.write(Math.random()+"<br>");
document.write(Math.random()*6 + 1+"<br>");
document.write(Math.floor(Math.random()*6));*/


/*
///****************************guessing game****************************

var numofWon = 0;
var numofLoss = 0;
for(var i=0;i<5;i++)
{
	var guessNumber = parseInt(prompt("Enter the guessing number from 1 to 5:"));
	var randomNumber = Math.floor(Math.random()*5)+1;
	if(guessNumber==randomNumber)
{
	document.write("You won!!!!!" + "<br>");
	numofWon++;
}
else
{
	document.write("You loss.....The random number was " + randomNumber + "<br>");
	numofLoss++;
}

}
document.write("The total number of won "+ numofWon + "<br>");
document.write("The total number of lossing " + numofLoss + "<br>");*/


/*
///****************************data method****************************

var date = new Date();
document.write(date + "<br>");
var currentYear = date.getFullYear();
document.write(currentYear + "<br>");
var currentMonth = date.getMonth();
document.write(currentMonth + "<br>");
var currentDate = date.getDay();
document.write(currentDate + "<br>");
var currentHour = date.getHours();
document.write(currentHour + "<br>");
var currentMinute = date.getMinutes();
document.write(currentMinute + "<br>");
var currentSecond = date.getSeconds();
document.write(currentSecond + "<br>");*/


/*
///****************************DOM practice****************************

//html part:
<h1>Hello this is me</h1>
	<h1>Hello this is sazida</h1>
	<h2 class="hd2">sazida chowdhury</h2>

document.getElementsByTagName("h1")[0].innerHTML = "sani";
document.getElementsByClassName("hd2")[0].innerHTML = "sazida akther chowdhury";
document.querySelector(".hd2").innerHTML = "sanzida chowdhury";
*/


/*
///****************************Query Selector practice****************************

//html part:
<a href="#">Home</a>

	<ul>
		<li><a href="#">Tutorial</a></li>
		<li><a href="#">Bangladesh</a></li>
	</ul>
	<div class="my-div">
		<a href="#">Contact</a>
	</div>

document.querySelector("a").innerHTML = "About";
document.querySelector("li a").innerHTML = "New Text";
document.querySelector(".my-div a").innerHTML = "submit";*/

/*
///****************************onclick practice****************************

//html part:
<button onclick="button1()">click me1</button>
	<button onclick="button2()">click me2</button>
	<h1 id="hd1"></h1>

var btn = document.querySelector("#hd1");
function button1()
{
   btn.innerHTML = "This is button1";
}
function button2()
{
   btn.innerHTML = "This is button2";
}*/


/*
///****************************onclick practice with image****************************
    
	//html part:

	<button onclick="picture1()">show image 1</button>
	<button onclick="picture2()">show image 2</button>
	<p></p>
	<img id = "myImageId" src="#" alt=" " height="300" width="300">

var myImg = document.querySelector("#myImageId");
function picture1()
{
	myImg.src = "image/pic2.jpg";
}

function picture2()
{
	myImg.src = "image/pic1.webp";
}*/




/*
//query-1:
var myColor = ["Red", "Green", "White", "Black"];

document.write(myColor.join(",")+"<br>");
var plusColor = myColor.join("+");
document.write(plusColor + "<br>");

//query-2:

var ar =  [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
ar.sort(function(a,b){
	return a-b;
})
document.write(ar + " "+"<br>");


//query-3:

var array = [1,2,3,4,5];
var sum = 0;
for(var i=0;i<array.length;i++)
{
	array[i]=Math.pow(array[i],2);
	sum+=array[i];
}
document.write(sum+"<br>");


//query-5:

var currentDate = new Date();
document.write(currentDate);*/

/*
///****************************DOM find,create,add,delete****************************

//html part: 


var link = document.getElementsByTagName("a")[0];
link.innerHTML = "Lets design me";
link.style.textDecoration = "none";
link.style.color = "orange";
link.style.fontSize = "20px";
link.href="https://learnwithsazida.com"
const heading3 = document.createElement("h1");
const text = document.createTextNode("This is heading 3");
heading3.appendChild(text);
const myDiv = document.querySelector("#my-div");
myDiv.appendChild(heading3);
console.log("hi");
const heading2 = document.getElementsByTagName("h1")[1];
myDiv.removeChild(heading2);*/


/*
///****************************DOM traversing****************************

//html part:
<ol class="student-list">
<li class="std1">sazida</li
<li class="std2">sanzida</li
<li class="std3">sani</li
</ol>

var allStudent = document.querySelector(".student-list");
var student1 = allStudent.children[0];
var studentA = document.querySelector("li");
var studentList = studentA.parentElement;
var studentB = studentA.nextElementSibiling;
var studentC = studentB.nextElementSibiling;
var studentD = studentC.previousElementSibiling;*/


/*
///****************************Image slider**************************** 

//html part:


var photos = ["image/b1.jpg", "image/b2.jpg","image/b3.jpg","image/b4.jpg","image/b5.jpg","image/b6.jpg"];
var findImg = document.querySelector("img");
var count = 0;

function next() {
	count++;
	if (count >= photos.length) {
		count = 0;
		findImg.src = photos[count];
	}
	else {
		findImg.src = photos[count];
	}

}
function prev()
{
	count--;
	if (count<0) {
		count = photos.length-1;
		findImg.src = photos[count];
	}
	else {
		findImg.src = photos[count];
	}
}*/


/*
///****************************change CSS style dynamically****************************

///html part:
<p id="paraId">This is paragraph</p>
<button onclick="addStyle()">add style</button>
<button onclick="removeStyle()">remove style</button>

///css part: 
.para-style{
    font-size: 3rem;
    color: green;
    font-weight: bold;
    font-style: italic;
}

function addStyle()
{
	var myStyle = document.querySelector("#paraId");
	myStyle.classList.add("para-style");
}
function removeStyle()
{
	var myStyle = document.querySelector("#paraId");
	myStyle.classList.remove("para-style");
}*/



/*
///****************************Event listener****************************

//html part:
<h1>Sazida</h1>

//css part:
.tagStyle{
    font-size: 3rem;
    color: rgb(255, 0, 0);
}

var mytag = document.querySelector("h1");
mytag.addEventListener("mouseover",function(){
	mytag.classList.add("tagStyle");
})
mytag.addEventListener("mouseout",function(){
	mytag.classList.remove("tagStyle");
})*/



/*
///*************************ASSIGNMENT-3*************************** 

//query-01

function Student(name,sclclss,rollno){
	this.name = name;
	this.sclclss = sclclss;
	this.rollno = rollno;

	this.display = function()
	{
	  document.write(this.name + " ");
	  document.write(this.sclclss + " ");
	  document.write(this.rollno + " ");
	}

}
var st1 = new Student("David Rayy,","VI,",12);
st1.display();
document.write("<br>");


//query-02
delete st1.rollno;
st1.display();
document.write("<br>");


//query-03*/



/*
///********************************Event Listener with multiple elements**********************************

//html part:
<h1> Haven't clicked anything</h1>
<button class="btn">Button 1</button>
<button class="btn">Button 2</button>
<button class="btn">Button 3</button>   

//css part:
.tagStyle{
    font-size: 3rem;
    color: rgb(255, 0, 0);
}

var len = document.querySelectorAll(".btn").length;
for(var i=0;i<len;i++)
{
	document.querySelectorAll(".btn")[i].addEventListener("click",function(){
		var text = this.innerHTML;
		var mytag = document.querySelector("h1");
		mytag.innerHTML = text + " " + "is clicked";
		mytag.classList.add("tagStyle");
	})
}*/


/*
///***************************Audio play***********************

//html part:
    <button class="btn">sound 1</button>
    <button class="btn">sound 2</button>
	
	//css part:
	.btn{
    background-color: aqua;
    padding: 20px;
    border-radius: 20px;
    width: 30%;
}


var len = document.querySelectorAll(".btn").length;
for(var i=0;i<len;i++)
{
	document.querySelectorAll(".btn")[i].addEventListener("click",function(){
		var text = this.innerHTML;
		audioPlay(text);
	})
}

function audioPlay(text)
{
	switch(text)
	{
		case "sound 1":
			var audio = new Audio("sound/sound1.mp3");
			audio.play();
			break;

			case "sound 2":
			var audio = new Audio("sound/sound2.mp3");
			audio.play();
			break;
	}
}*/


/*
///********************************Add Animation************************************

//HTML part:
	    <button class="btn a">sound 1</button>
    <button class="btn b">sound 2</button>
	
	//CSS part:
	button{
    width: 100px;
    height: 50px;
    margin: 20px;
}
.anim{
    box-shadow: 0 15px 18px 0 red;
    opacity: 0.5;
}

var len = document.querySelectorAll(".btn").length;
for(var i=0;i<len;i++)
{
	document.querySelectorAll(".btn")[i].addEventListener("click",function(){
		var text = this.innerHTML;
		audioPlay(text);
		playAnimation(text);
	})
}
function audioPlay(text)
{
	switch(text)
	{
		case "sound 1":
			var audio = new Audio("sound/sound1.mp3");
			audio.play();
			break;

			case "sound 2":
			var audio = new Audio("sound/sound2.mp3");
			audio.play();
			break;
	}
}

function playAnimation(text)
{
	var selectedButton = document.querySelector("text");
	selectedButton.classList.add("anim");

	setTimeout(function(){
		selectedButton.classList.remove("anim");
	},1000);
}*/


/*
///********************************ADD Keypress Listener********************************


//HTML part:
<button class="btn a">a</button>
<button class="btn b">b</button>
<textarea></textarea>
<h1>This is demo</h1>

//CSS part:
button{
    width: 100px;
    height: 50px;
    margin: 20px;
}
.anim{
    box-shadow: 0 15px 18px 0 red;
    opacity: 0.5;
}

var len = document.querySelectorAll(".btn").length;
for(var i=0;i<len;i++)
{
	document.querySelectorAll(".btn")[i].addEventListener("click",function(){
		var text = this.innerHTML;
		audioPlay(text);
	})
}

document.addEventListener("keypress",function(event){
	var text = event.key;
	audioPlay(text);
})

function audioPlay(text)
{
	switch(text)
	{
		case "a":
			var audio = new Audio("sound/sound1.mp3");
			audio.play();
			break;

			case "b":
			var audio = new Audio("sound/sound2.mp3");
			audio.play();
			break;
	}
}
var cnt = 0;
document.querySelector("textarea").addEventListener("keypress",function(event){
	cnt++;
	var text = event.key;
	document.querySelector("h1").innerHTML = "You have pressed " + cnt;

})*/


/*
///**************************Event Object************************************


//change event

//const input = document.querySelector("input");
//input.addEventListener("change",changeHandler)

//function changeHandler(e)
//{
//	console.log(e.target.value);
//}

// programs = document.querySelectorAll("input[name=program]");
//console.log(programs);
//Array.from(programs).map((program) =>{
//	program.addEventListener("change",programHandler);
//})
//function programHandler(e)
//	{
//		if(e.target.checked)
//		{
//			console.log(e.target.value);
//		}
//	}


//html part:
<form action="">
        <div>
                <label for="name">Name:
                        <input name="text" id="name" name="name" required>
                </label>
        </div>
        <div>
                <label for="email">Email:
                        <input name="text" id="email" name="email" size="30" required>
                </label>
        </div>
        <div>
                <label for="password">Password:
                        <input name="text" id="password" name="password" required minlength="4" maxlength="8">
                </label>
        </div>
        <div>
                <input type="submit" value="signup" required>
        </div>
        </form>

var form = document.querySelector("form");
var name = document.querySelector("div #name");
var email = document.querySelector("div #email");
var password = document.querySelector("div #password");

form.addEventListener("submit",formhandler);

function formhandler(e)
{
	e.preventDefault();
	

	var userInfor = {
		name : name.value,
		email : email.value,
		password : password.value,
	}
	console.log(userInfor);
}*/

/*
///****************************TOGGLE*********************************

//html part:
<details>
                <summary>Sani</summary>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Nemo perferendis expedita maiores aliquam! Dolorum, perferendis?</p>
        </details>

var details = document.querySelector("details");
details.addEventListener("toggle",function(e){
	console.log(e.target.open);
})*/


/*
///********************************TOGGLE LOG-in FORM***************************

//html part
<button>Log in</button>
    <div class="lf">
        <lavel>username</lavel>
        <input type="text">
        <br><br>
        <lavel>password</lavel>
        <input type="password">
    </div>


var btn = document.querySelector("button");
var lf = document.querySelector(".lf");
btn.addEventListener("click",function(){
	
	if (lf.style.display == 'block') {
		lf.style.display = 'none';
	} else {
		lf.style.display = 'block';
	}
})*/


