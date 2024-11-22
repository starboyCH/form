const nameInput= document.getElementById("student-name");
const emailInput= document.getElementById("student-mail");
const selectedSubject= document.getElementById("subjects");
const submit= document.querySelector(".submit");
submit.addEventListener("click",(e)=>{
	e.preventDefault();
	if((verifyName(nameInput) == true) && (verifyEmail(emailInput) == true) && (verifySubject(selectedSubject)==true)) {
		alert("Asignatura inscrita correctamente");
	}
})
const verifyName=(input)=>{
	let name= input.value;
	if(name.includes(" ")==false){
		alert("Ingresa tu nombre y apellido correctamente");
		return false;
	}
	else{
		return true;
	}
}
const verifyEmail=(input)=>{
	let email= input.value;
	if((email.includes(".com")==false) || (email.includes("@")==false)){
		alert("Correo inválido");
		return false;
	}
	else{
		return true;
	}
}
const verifySubject=(option)=>{
	let subject= option.value;
	if(subject==""){
		alert("Selecciona una materia");
		return false;
	}
	else{
		return true;
	}
}
