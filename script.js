score=0;
answer=8;
questionNo=0;
questionNum=1;
answerKey=0;
answerNumbersKey=0;

answerNumbers=[];
answerNumbers.push("2");
answerNumbers.push("2");
answerNumbers.push("3");
answerNumbers.push("4");
answerNumbers.push("4");
answerNumbers.push("1");
answerNumbers.push("3");
answerNumbers.push("2");
answerNumbers.push("1");


answers=[];
answers.push("Sciurus");
answers.push("cricetins");
answers.push("Sirics");
answers.push("Carassius");
answers.push("Hàmster xinés");
answers.push("Hàmster vulgar");
answers.push("Hàmster maximus");
answers.push("Hàmster de Roborowski");
answers.push("120 km/h");
answers.push("1.2 km/h");
answers.push("6 km/h");
answers.push("12 km/h");
answers.push("nom1");
answers.push("nom2");
answers.push("nom3");
answers.push("nom4");
answers.push("reial");
answers.push("carablanca");
answers.push("ullgroc");
answers.push("fantasma");
answers.push("300");
answers.push("900");
answers.push("150");
answers.push("1200");
answers.push("Azrael");
answers.push("Alvin");
answers.push("Jerry");
answers.push("Dory");
answers.push("Remy");
answers.push("Stuart Little");
answers.push("Splinter");
answers.push("Jerry");
answers.push("1892");
answers.push("1852");
answers.push("1921");
answers.push("1899");


questions=[];
questions.push("Hàmster és un germanisme que fa referència als...");
questions.push("Quina espècie de hàmster pot arribar a fer 35 cm de llarg");
questions.push("Quina és la velocitat màxima a la que pot arribar un hàmster?");
questions.push("Com es diuen els 4 pingûins de Madagascar?");
questions.push("Quina de les espècies no és un pingûí?");
questions.push("Quantes espècies hi ha actualment al zoo de Barcelona?");
questions.push("Quin és el ratolí més famós de la història?");
questions.push("Quin d'ells no era un ratolí??");
questions.push("En quin any es va inaugurar el zoo de Barcelona?");


window.onload = function() 
{
  	document.getElementById("question").innerHTML=questions[questionNo];

  	for(i=1;i<=8;i++)
  	{
  		document.getElementById("btn"+i).innerHTML=answers[answerKey];
  		answerKey++;
  	}	

};

function getResult(value)
{
	if(value==answer)
	{
		score++;
	}

	if(questionNo==9)
	{
		finish();
	}

	else
	{
		questionNo++;
		questionNum++;
		nextQ();
	}
}

function nextQ()
{

	document.getElementById("head").innerHTML="Question" + " " + questionNum;
	document.getElementById("question").innerHTML=questions[questionNo];

	for(i=1;i<=4;i++)
  	{
  		document.getElementById("btn"+i).innerHTML=answers[answerKey];
		answerKey++;	
  	}
	answerNumbersKey++;
	answer=answerNumbers[answerNumbersKey];
}

function finish()
{
document.getElementById("head").innerHTML="Results";
document.getElementById("question").innerHTML="";
// var parent=document.getElementById("body");
// var child =document.getElementById("answers");
// parent.removeChild(child);

document.getElementById("answers").innerHTML="<p id='score'>Your score was "+ score +"</p>";
}