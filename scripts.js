function ChrisPage(){
	this.pictures=[];
	var webpage=this;
	this.getinfo=getInfo;
	this.createphotos=createPhotos;


	function createPhotos(){
		webpage.pictures.forEach(function(element){
		var indcont=document.createElement("div");
		indcont.classList.add("individual-container");
		var maincont=document.getElementsByClassName("main-container")[0];
		maincont.appendChild(indcont);
		var piccont=document.createElement("div");
		piccont.classList.add("pic-container");
		piccont.style.backgroundImage="url('"+element.img+"')"
		indcont.appendChild(piccont);
		var datecont=document.createElement("div");
		datecont.classList.add("datecontainer");
		var concatdate=concatDate(element.date);
		datecont.innerHTML=concatdate;
		indcont.appendChild(datecont);
		var title=document.createElement("div");
		title.classList.add("title");
		title.innerHTML=element.title;
		indcont.appendChild(title);
		var categorystring=""
		element.categories.forEach(function(cat, index){
			if(element.categories.length>1 && index===0){
				categorystring+=cat+", "
			}else{
				categorystring+=cat
			}
		})
		var hr=document.createElement("hr")
		hr.classList.add("divider")
		indcont.appendChild(hr)
		var category=document.createElement("div")
		category.classList.add("category")
		category.innerHTML=categorystring
		indcont.appendChild(category)
		})
	}
	function concatDate(number){
		var months=["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
		var monthnum=number.split("/")
		for(var i=0;i<months.length;i++){
			if(i===monthnum[0]-1){
				returnstring=months[i] + " " +monthnum[1]
				return returnstring; 
			}
		}
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