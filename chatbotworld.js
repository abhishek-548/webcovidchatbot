function send(){
	var x = document.getElementById("input").value;
	//user
	var p = document.createElement("p");
	var y = document.createTextNode(x);
	p.appendChild(y);
	var di = document.getElementsByClassName("r1");
	di[0].appendChild(p);
	//bot
	if (x=="Get Started"){
		var pb = document.createElement("p");
		var res1 = document.createTextNode("Welcome to covid bot");
		pb.appendChild(res1);
		var dib = document.getElementsByClassName("r2");
		dib[0].appendChild(pb);
	}
	else if (x=="how can you help me"){
		var pb = document.createElement("p");
		var res1 = document.createTextNode("Iam covid chatbot see alert");
		pb.appendChild(res1);
		var dib = document.getElementsByClassName("r2");
		dib[0].appendChild(pb);
		alert("This bot can provide covid-19 statistics across states in india and in world.(Ps:- All states or countries should be in upper camel case only)\n"+
			"1.)Total number of people infected\n"+
			"2.)Total number of people newly Infected\n"+
			"3.)Total number of people recovered\n"+
			"4.)Total number of people newly recovered\n"+
			"5.)Total number of people died\n"+
			"To get any type of detail type \n"+
			"State or Country,number");
	}
	else{
		var result = x.split(",");
		var state = result[0];
		var info = result[1];
		var value = "Error msg";
		var name;
		var request = new XMLHttpRequest();
		request.open('GET', 'https://coronavirus-19-api.herokuapp.com/countries', true);
		request.onload = function () {
  			// Begin accessing JSON data here
  			var data = JSON.parse(this.response);
  			for(var i=0;i<data.length;i++){
  				if(data[i].country==state){
  					if(info=="1"){
  						value = data[i].cases;
  						name = "Infected"
  					}
  					else if(info=="2"){
  						value = data[i].todayCases;
  						name = "newly Infected"
  					}
  					else if(info=="3"){
  						value = data[i].recovered;
  						name = "recovered"
  					}
  					else if(info=="4"){
  						value = "Data not updated";
  						name = "newly recovered"
  					}
  					else if(info=="5"){
  						value = data[i].deaths;
  						name = "died"
  					}
  				}
  			}
  			var sending = `The total ${name} in ${state} are : ${value}`
  			var pb = document.createElement("p");
			var res1 = document.createTextNode(value);
			pb.appendChild(res1);
			var dib = document.getElementsByClassName("r2");
			dib[0].appendChild(pb);
		}
		request.send();
	}
	document.getElementById("input").value = "";
}
