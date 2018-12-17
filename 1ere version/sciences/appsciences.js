var quizz =[
           {"question" :'Quel élément du Tableau Périodique des Eléments est symbolisé par la lettre N ?',
        	"reponse":['Potassium','Azote', 'Sodium']},

        	{"question":'Quel grand physicien, prix Nobel, découvrit la radioactivité ?',
        	"reponse":['Henri Becquerel','John Dalton', 'Frédéric Joliot-Curie']},

        	{"question":'Quelle est la plus grosse artère de notre corps ?',
        	"reponse":['Jugulaire','Aorte', 'Carotide']},


        	{"question":'Derniere question',
        	"reponse":['dernier1',' der2', 'der3']},
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
console.log(quizz[i].question);

}

}

//changer de réponse

function changerep(){
	for (var i = 0; i < quizz.length; i++) {
		recuprep1.innerHTML = quizz[i].reponse[0];
		recuprep2.innerHTML = quizz[i].reponse[1];
		recuprep3.innerHTML = quizz[i].reponse[2];
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
