var px=0;
var py=0;
var frame = 1;
cont = 1;

var interval = setInterval(function(){

frame++;

	document.querySelector(".frame").src = "resources/default/1_2/images/"+frame+".jpg";
		
	if(frame==3){
		
		frame -= 3 ;		
	};
		
			
		},500);
 


document.addEventListener("keydown",function(event){
var obj=document.getElementById("dv3");
var tecla=event.keyCode;
//37=Esquerda - 38=cima - 39=direita - 40=baixo

if (tecla==37){
	px-=10;
	obj.style.left=px+"px";
}else if(tecla==38){
	py-=10;
	obj.style.top=py+"px";
}else if (tecla==39){
	px+=10;
	obj.style.left=px+"px";
}else if(tecla==40){
	py+=10;
	obj.style.top=py+"px";
	}

});