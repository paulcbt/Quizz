var quizz =[
           {"question" :'quel es le reocrdman de medaille aux jo?',
        	"reponse":['bolt','phelps', 'lacourt']},

        	{"question":'Quel est la longueur d’une table de ping pong?',
        	"reponse":['2,74m',' 3,12m', '4m']},

        	{"question":'quel est le record du monde sur 100m?',
        	"reponse":['8,90s',' 9,58s', '9,69s']},
        	];

 var insert = document.getElementById('question');
   	insert.innerHTML = quizz[0].question;




var score=0;
var recupv = document.getElementById('vraie');
var recupq = document.getElementById('question');
var recuprep1 = document.getElementById('rep1');
var recuprep2 = document.getElementById('rep2');
var recuprep3 = document.getElementById('rep3');

recupv.addEventListener("click", changev , false);
recupv.addEventListener("click", changequest , false);

rep1.innerHTML = quizz[0].reponse[0];
rep2.innerHTML = quizz[0].reponse[1];
rep3.innerHTML = quizz[0].reponse[2];

function changequest(){
	for (var i = 0; i < 20; i++) {

	insert.innerHTML = quizz[i].question;
}

}




function changev(){
	score++;
	alert("bonne réponse score: "+score);
	var quest1 ="test";
	vraie.innerHTML= quest1;
	

}




var recupf = document.getElementsByClassName('faux'); 




for (var i =0; i < recupf.length; i++) {
	recupf[i].addEventListener("click",changef,false);
	console.log(i);
}




	function changef(){	
	alert("tu as selectionné une mauvaise réponse");

	}








	 	/*var test = recup.onclick = function() {
	 		 	score++;
	    	  alert("tu as "+score);
	 	};*/
