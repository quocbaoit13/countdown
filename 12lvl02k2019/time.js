var counter = 0;
var interval_set = 0;
var anbus = []

function changeTitle(){
	var d = new Date();
	var ts = +d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
	var msg = "" +  "/" + ts;
	history.pushState("","","/")
	history.pushState("","",msg)
	counter++;
	if(interval_set == 0){
		interval_set = 1
		setInterval(function () {changeTitle()}, 1000);	
	}
}
changeTitle();
//+d.getYear()+"/@Time/"+d.getDay()+"/"+d.getMonth()+"/"