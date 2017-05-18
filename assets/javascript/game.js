var presidents = ['George Washington', 'Thomas Jefferson', 'James Madison','James Monroe','Andrew Jackson','Martin Van Buren', 'Zachary Taylor', 'Abraham Lincoln', 'Andrew Johnson','Theodore Roosevelt', 'Woodrow Wilson','John Kennedy','Richard Nixon','Gerald Ford','Jimmy Carter','Ronald Reagan','Bill Clinton','Herbert Hoover','Calvin Coolidge','Grover Cleveland'];

var chooseWord = presidents[Math.floor(Math.random() * presidents.length)];

    


console.log("pick names working");

var p;
var guesses = 5;
var answerArray = [];

function startUp() {

for (var i = 0; i < chooseWord.length; i++){
	answerArray[i] = "_";
}

console.log("underscores");

p = answerArray.join(" ");
	document.getElementById("presidents").innerHTML = p;
}
console.log("array working");

function Letter(){
	var letter = document.getElementById("letter").value;
	if (letter.length > 0){
		for(var i = 0; i < chooseWord.length; i++)
		{
			if(chooseWord[i] === letter)
			{
				answerArray[i] = letter;
			}
		}
	}
}

