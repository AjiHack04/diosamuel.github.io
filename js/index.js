window.onscroll=()=>{
	if(window.scrollY>0){
		document.querySelector("#title span b").innerHTML="V."
		document.querySelector("#title").classList="animated fadeIn"
	}else{
		document.querySelector("#title span b").innerHTML="V."
		document.querySelector("#title").classList="animated headShake"
	}
}

window.onload=()=>{
	if (!localStorage.theme) { theme('light') }
	theme(localStorage.theme)
}
function theme(color) {
	localStorage.theme = color
	console.log(localStorage.theme)
	if(localStorage.theme=='dark'){
		document.body.setAttribute('class','dark')
		btn('dark').style.display='none'
		btn('light').style.display='block'
	}else if(localStorage.theme=='light'){
		document.body.setAttribute('class','light');
		btn('light').style.display='none'
		btn('dark').style.display='block'
	}else{
		console.log('error, no theme named'+color)
	}
}
function btn(el){return document.querySelector(`[${el}]`)}