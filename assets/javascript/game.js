	var presidents = ['George Washington', 'Thomas Jefferson', 'James Madison','James Monroe','Andrew Jackson','Martin Van Buren', 'Zachary Taylor', 'Abraham Lincoln', 'Andrew Johnson','Theodore Roosevelt', 'Woodrow Wilson','John Kennedy','Richard Nixon','Gerald Ford','Jimmy Carter','Ronald Reagan','Bill Clinton','Herbert Hoover','Calvin Coolidge','Grover Cleveland'];
	toUpper = function(x){ 
	  return x.toUpperCase();
	};
	presidents.map(toUpper);

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
	var drawSequence = [drawHead,drawTorso,drawLeftArm,drawRightArm,drawLeftLeg,drawRightLeg];
	var hangmanState=0;
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
			
			var correctGuess = false;

			for(var i = 0; i < chooseWord.length; i++)

			{	
				if(chooseWord[i] === letter)
				{
					answerArray[i] = letter;
					correctGuess = true;
				}
			
			}

			if (correctGuess == false) {
				drawSequence[ hangmanState++ ]();
			}
					lettersArray.push(letter)
					document.getElementById("presidents").innerHTML = answerArray.join(" ");
					document.getElementById("lettersGuessed").innerHTML = "Letters guessed: " + lettersArray.filter(onlyUnique);

			
		}
  			if(hangmanState === drawSequence.length){
	 				alert("The answer was " + chooseWord + ". Better luck next time!")
	 					reset()
}

			if(answerArray === chooseWord){
			         alert("You guessed correctly. Our nation salutes you!!!")
			     		reset()
			     		
			     	}


	}
	// Drawing the hangman

	function drawHead () {
	  document.getElementById("head").style.opacity = 10;
	}
	function drawTorso () {
	  document.getElementById("torso").style.opacity = 10;
	}
	function drawLeftArm () {
	  document.getElementById("leftArm").style.opacity = 10;
	}
	function drawRightArm () {
	 document.getElementById("rightArm").style.opacity = 10;   
	}
	function drawLeftLeg () {
	 document.getElementById("leftLeg").style.opacity =10;   
	}
	function drawRightLeg() {
	 document.getElementById("rightLeg").style.opacity =10;   
	}
	// plays music and pause music

	function play(){
	       var audio = document.getElementById("audio");
	       audio.play();
	                 }
	function pause(){
			var audio = document.getElementById("audio");
			audio.pause();
	
	}
	// resets game 
	function reset(){
		
		var x = document.getElementById("lettersGuessed");
		hangmanState =0;
		document.getElementById("head").style.opacity = 0;
		document.getElementById("torso").style.opacity = 0;
		document.getElementById("leftArm").style.opacity = 0;
		document.getElementById("rightArm").style.opacity = 0;
		document.getElementById("leftLeg").style.opacity =0;
		document.getElementById("rightLeg").style.opacity =0;
		document.getElementById("lettersGuessed").innerHTML = "Letters guessed: ";

		startUp();
		lettersArray = [];
	}


