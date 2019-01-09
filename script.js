let cercle = document.querySelectorAll(".cercle");

for (let i = 0; i < cercle.length; i++) {
	
	cercle[i].onclick = function(){
		let recupereID = this.id;
		if(!this.classList.contains("active")){
			for (let j = 0; j < cercle.length; j++) {
				cercle[j].classList.remove("active");
				
				let idT = cercle[j].id;
				document.getElementById("texte_"+idT).style.display = "none";	
			}
			
			this.classList.add("active");
			document.getElementById("texte_"+recupereID).style.display = "block";
		} else {
		
			this.classList.remove("active");
			document.getElementById("texte_"+recupereID).style.display = "none";
		}
	}
}