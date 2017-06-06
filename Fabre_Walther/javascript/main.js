alert("parrafo");
var a=0;
var actualizar= function(){
	var tmp=document.getElementById("parrafo");
	if(a===0){
		tmp.style.display="none"	;
		document.getElementById("link").text="Mostrar";
		tmp.parentNode.childNodes[3].childNodes[0].style.display="none"
		a=1;        
        }	
	else{
		tmp.style.display="block";
		document.getElementById("link").text="Esconder";
		a=0;
		tmp.parentNode.childNodes[3].childNodes[0].style.display="block";	
	}

};

//Arbol
function printDOM(node, prefix){
	console.log(prefix + node.nodeName);
	for(let i=0; i< node.childNodes.length;i++){
		printDOM(node.childNodes[i], prefix + ' ');	
	}
};

printDOM(document, '');
//Resltar
var b=0;
var resaltar= function(){
	var tmp=document.getElementsByTagName("P");
	if(b===0){
        for(let i=0; i<tmp.length;i++){
            tmp[i].style.background="lightblue";
        }	
        document.getElementById("limon").text="Normal";
		b=1;		
	}	
	else{
		 for(let i=0; i<tmp.length;i++){
            tmp[i].style.background="white";
        }
        document.getElementById("limon").text="Resaltar";
		b=0;
	}
};

//Buscar Lorem
var on=0;
var buscar= function(){
	var tmp=document.getElementsByTagName("body");
   
	for(let i=0;i<tmp.length;i++){
      let t= tmp[i].innerHTML;
      let re= t.replace(/Lorem/gi, "<span>Lorem</span>");
      tmp[i].innerHTML=re;      		
    }
    let tmp2=document.getElementsByTagName("span");
  if(on==0){        
        for(let i=0; i<tmp2.length;i++){
          tmp2[i].style.background="lightblue";                
        }
        document.getElementById("mora").text="OFF"
        on=1;
    }else if(on>0){
        for(let i=0; i<tmp2.length;i++){
          tmp2[i].style.background="white";          
        }
        document.getElementById("mora").text="ON"
        on=0;
    }
};


