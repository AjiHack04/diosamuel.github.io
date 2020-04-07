window.onscroll=()=>{
	if(window.scrollY>0){
		document.querySelector("#title span b").innerHTML="Virdio"
		document.querySelector("#title").classList="animated fadeInDown"
	}else{
		document.querySelector("#title span b").innerHTML="V."
		document.querySelector("#title").classList="animated fadeIn"
	}
}