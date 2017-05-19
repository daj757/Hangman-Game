var presidents = ['George Washington', 'Thomas Jefferson', 'James Madison','James Monroe','Andrew Jackson','Martin Van Buren', 'Zachary Taylor', 'Abraham Lincoln', 'Andrew Johnson','Theodore Roosevelt', 'Woodrow Wilson','John Kennedy','Richard Nixon','Gerald Ford','Jimmy Carter','Ronald Reagan','Bill Clinton','Herbert Hoover','Calvin Coolidge','Grover Cleveland'];
// Random choosen words for game
var chooseWord = presidents[Math.floor(Math.random() * presidents.length)];
  
console.log("pick names working");

var p;
var lettersArray = [];

// Makes sure duplicates are not entered into letters guessed
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

var answerArray = [];
var draw = [drawHead,drawTorso,drawLeftArm,drawRightArm,drawLeftLeg,drawRightLeg]
// Chooses words for start of game
function startUp() {

for (var i = 0; i < chooseWord.length; i++){
	answerArray[i] = "_";

}

console.log("underscores");

p = answerArray.join(" ");
	document.getElementById("presidents").innerHTML = p;
}
console.log("array working");
// Collects letter value and matches it against choosen word
function Letter(){
	var letter = document.getElementById("letter").value;
	

	if (letter.length > 0){
		
		for(var i = 0; i < chooseWord.length; i++)

		{	
			if(chooseWord[i] == letter)
			{
				answerArray[i] = letter;
			}
			else if (chooseWord[i]!== letter)
			{
 				
				
			}
		
		}
				lettersArray.push(letter)
				document.getElementById("presidents").innerHTML = answerArray.join(" ");
				document.getElementById("lettersGuessed").innerHTML = lettersArray.filter(onlyUnique);
	}

}

