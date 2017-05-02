function ChrisPage(){
	this.pictures=[];
	var webpage=this;
	this.getinfo=getInfo;
	this.createphotos=createPhotos;


	function createPhotos(){
		webpage.pictures.forEach(function(element){
		var indcont=document.createElement("div")
		indcont.classList.add("individual-container")
		var maincont=document.getElementsByClassName("main-container")[0]
		maincont.appendChild(indcont)
		var piccont=document.createElement("div")
		piccont.classList.add("pic-container")
		piccont.style.backgroundImage="url('"+element.img+"')"
		indcont.appendChild(piccont)
		})
	}

	function getInfo(){
		 $.ajax({
		         url: "https://api-practice-wdi.herokuapp.com/posts",
		         method: "GET",
		         data: {
		         	
		        },
		         success: function(response){
		             console.log(response);
		             response.posts.forEach(function(element){
		             	webpage.pictures.push(element);
		             })
		             }
		             
		         

		     })
	}	
}
var chrispage=new ChrisPage()