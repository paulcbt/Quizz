var quizz =[
           {"question" :'Quel athlète est recordman de médailles olympiques ?',
        	"reponse":['Usain Bolt','Michael Phelps', 'Carl Lewis']},

        	{"question":'Quelle est la longueur d’une table de ping pong ?',
        	"reponse":['2,74m',' 3,12m', '4m']},

        	{"question":'Quel est le record du monde sur 100m ?',
        	"reponse":['8,90s',' 9,58s', '9,69s']},

        	{"question":'Quelle est la distance d’un marathon ',
        	"reponse":['40,210km','42,195km', '44,365km']},

          {"question":'A quoi correspond le maillot à pois du tour de France ? ',
          "reponse":['Meilleur jeune','Meilleur grimpeur', 'Plus grande combativité']},

          {"question":'A quoi correspond le maillot à pois du tour de France ? ',
          "reponse":['Meilleur jeune','Meilleur grimpeur', 'Plus grande combativité']},
        	];





//question de début
 var insertq = document.getElementById('question');
   	insertq.innerHTML = quizz[0].question;

rep1.innerHTML = quizz[0].reponse[0];
rep2.innerHTML = quizz[0].reponse[1];
rep3.innerHTML = quizz[0].reponse[2];


var score=0;
var recupv = document.getElementById('vraie');
var recuprep1 = document.getElementById('rep1');
var recuprep2 = document.getElementById('rep2');
var recuprep3 = document.getElementById('rep3');

recupv.addEventListener("click", changev , false);
recupv.addEventListener("click", changequest , false);
recupv.addEventListener("click", changerep , false);




//changer de quetsion

function changequest(){
	for (i = 0; i <= quizz.length; i++) {
			var insertion = quizz[i].question;
insertq.innerHTML = insertion;
if (i == (i-i+1)) {
  return;
}
console.log(quizz[i].question);

}

}

//changer de réponse


function changerep(){
	for (var i = 0; i < quizz.length; i++) {
		recuprep1.innerHTML = quizz[i].reponse[0];
		recuprep2.innerHTML = quizz[i].reponse[1];
		recuprep3.innerHTML = quizz[i].reponse[2];
    if (i == (i-i+1)) {
      return;
    }
	}

}




function changev(){
	score++;
	alert("bonne réponse score: "+score);
}


// mauvaise réponse


var recupf = document.getElementsByClassName('faux');

for (var i =0; i < recupf.length; i++) {
	recupf[i].addEventListener("click",changef,false);
	recupf[i].addEventListener("click",changequest,false);
	recupf[i].addEventListener("click",changerep,false);
	console.log(i);
}




	function changef(){
	alert("tu as selectionné une mauvaise réponse");

	}








	 	/*var test = recup.onclick = function() {
	 		 	score++;
	    	  alert("tu as "+score);
	 	};*/
