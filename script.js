//serviceDesk
let btn = document.querySelector('.copySD');
let content = "\\NASPC31\ARQ_Service_Desk$";

btn.addEventListener("click", ()=>{
	navigator.clipboard.writeText(content);
});

//workplace
let btn2 = document.querySelector('.copySDCorp');
let content2 = "\\naspc31\sd_workplace$";

btn2.addEventListener("click", ()=>{

    let senha = window.prompt();
	
	let cod = "admin";

    if(senha == cod){
        navigator.clipboard.writeText(content2);
		alert("Copiado")
    }else{
        alert("incorreta");
    }
});



