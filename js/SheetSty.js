$(function(){
	var colors = new Array(8);
	var images = new Array(8);
	colors[0]="deepskyblue";
	colors[1]="orangered";
	colors[2]="mediumseagreen";
	colors[3]="orange";
	colors[4]="mediumvioletred";
	colors[5]="#f4f4f4";
	colors[6]="pink";
	colors[7]="#666";
	images[0]="url(../img/1.png)";
	images[1]="url(../img/2.png)"
	var middlw= $(".middle_three_ul li");
	console.log(middlw)
	for(var i=0;i<colors.length;i++){
		middlw[i].setAttribute('style','background-color: '+colors[i]+';');
//		middlw[i].setAttribute('style','background-image: '+images[0]+';')
	}
})
