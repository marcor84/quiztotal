score=0;
answer=3;
questionNo=0;
questionNum=1;
answerKey=0;
answerNumbersKey=0;

answerNumbers=[];
answerNumbers.push("3");
answerNumbers.push("1");
answerNumbers.push("4");

answers=[];
answers.push("1");
answers.push("4");
answers.push("5");
answers.push("7");
answers.push("Theiry Henry");
answers.push("Alan Shearer");
answers.push("Robbie Fowler");
answers.push("Didier Drogba");
answers.push("Man city");
answers.push("Liverpool");
answers.push("Man Utd");
answers.push("Chelsea");


questions=[];
questions.push("How many times have liverpool won the champions league?");
questions.push("Who is the all time leading socrer in the premier league?");
questions.push("Who won the 2016/2017 premier league?");

window.onload = function() 
{
  	document.getElementById("question").innerHTML=questions[questionNo];

  	for(i=1;i<=4;i++)
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

	if(questionNo==2)
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













