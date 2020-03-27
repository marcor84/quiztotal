score=0;
answer=8;
questionNo=0;
questionNum=1;
answerKey=0;
answerNumbersKey=0;

answerNumbers=[];
answerNumbers.push("3");
answerNumbers.push("1");
answerNumbers.push("4");
answerNumbers.push("3");
answerNumbers.push("1");
answerNumbers.push("4");
answerNumbers.push("3");
answerNumbers.push("1");

answers=[];
answers.push("Sciurus");
answers.push("Cricetinae");
answers.push("Sirics");
answers.push("Carassius");
answers.push("Theiry Henry");
answers.push("Alan Shearer");
answers.push("Robbie Fowler");
answers.push("Didier Drogba");
answers.push("Man city");
answers.push("Liverpool");
answers.push("Man Utd");
answers.push("Chelsea");
answers.push("22222");
answers.push("Liverpool");
answers.push("Man Utd");
answers.push("Chelsea");
answers.push("aaaaaa");
answers.push("Liverpool");
answers.push("Man Utd");
answers.push("Chelsea");
answers.push("eiiii");
answers.push("Liverpool");
answers.push("Man Utd");
answers.push("Chelsea");
answers.push("7777");
answers.push("Liverpool");
answers.push("Man Utd");
answers.push("Chelsea");
answers.push("aawdafasfafs");
answers.push("Liverpool");
answers.push("Man Utd");
answers.push("Chelsea");


questions=[];
questions.push("Hamster és un germanisme que fa referència a l'especie dels...");
questions.push("Quina espècie de hamster pot arribar a fer 35 cm de llarc?");
questions.push("Quina és la velocitat màxima que pot arribar un hamster?");
questions.push("Com es diuen els 4 pinguins de Madagascar?");
questions.push("Quina de les espècies no és un pinguí?");
questions.push("Quuantes espècies hi ha actualment al zoo de Barcelona?");
questions.push("Quin és el ratolí més famós de la història?");
questions.push("Quin d'ells no era un ratolí?");


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