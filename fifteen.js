$=function (id) {
	return document.getElementById(id);
}

var small_div = document.getElementsByTagName("div");
var ini_positionx, ini_positiony;
var picture = 0;

window.onload=main;

function main() {
	ready_bg_image();
	var temp1, temp2;
	for(var i = 2; i < small_div.length - 2; i ++) {
		small_div[i].onmouseover=on_mouse;
		small_div[i].onmouseleave=out_mouse;
		small_div[i].onclick= change_position;
	}
	$("shufflebutton").onclick=random_div;
	$("change_pic").onclick=chang_pictures;
}

function chang_pictures() {
	picture++;
	if(picture%5==0) {
		for (var i = 2; i < small_div.length - 2; i ++){
			small_div[i].style.backgroundImage="url(src/pic0.jpg)";
		}
	}
	else if(picture%5==1) {
		for (var i = 2; i < small_div.length - 2; i ++){
			small_div[i].style.backgroundImage="url(src/pic1.jpg)";
		}
	}
	else if(picture%5==2) {
		for (var i = 2; i < small_div.length - 2; i ++){
			small_div[i].style.backgroundImage="url(src/pic2.jpg)";
		}
	}
	else if(picture%5==3) {
		for (var i = 2; i < small_div.length - 2; i ++){
			small_div[i].style.backgroundImage="url(src/pic3.jpg)";
		}
	}
	else if(picture%5==4) {
		for (var i = 2; i < small_div.length - 2; i ++){
			small_div[i].style.backgroundImage="url(src/pic4.png)";
		}
	}
}

function random_div() {
	var rand = 0;
	for (var i = 0; i < 50; i ++) {
		var num_flag_top=0, num_flag_bottom=0, num_flag_left=0, num_flag_right=0;
		rand = parseInt(Math.random()*(5-1));
		for (var j = 2; j < small_div.length - 2; j++) {
			var x = parseInt(ini_positionx[0]), y = parseInt(ini_positiony[0]);
			var v_left = parseInt(small_div[j].style.left[0]), v_top = parseInt(small_div[j].style.top[0]);
			if((v_left- x == 1) && (y == v_top)){
				num_flag_right = j;
			}
			else if((x - v_left == 1) && (y == v_top)) {
				num_flag_left =j;
			}
			else if((v_top- y == 1) && (x == v_left)) {
				num_flag_top = j;
			}
			else if((y - v_top == 1) && (x == v_left)) {
				num_flag_bottom =j;
			}
		}
		var temp1="", temp2="";
		if(rand%4 == 0 && num_flag_right>0) {
			temp1 = small_div[parseInt(num_flag_right)].style.left;
			temp2 = small_div[parseInt(num_flag_right)].style.top;
			small_div[parseInt(num_flag_right)].style.left=ini_positionx;
			small_div[parseInt(num_flag_right)].style.top=ini_positiony;
			ini_positionx=temp1;
			ini_positiony=temp2;
		}
		else if (rand%4 == 1 && num_flag_left>0) {
			temp1 = small_div[parseInt(num_flag_left)].style.left;
			temp2 = small_div[parseInt(num_flag_left)].style.top;
			small_div[parseInt(num_flag_left)].style.left=ini_positionx;
			small_div[parseInt(num_flag_left)].style.top=ini_positiony;
			ini_positionx=temp1;
			ini_positiony=temp2;
		}
		else if (rand%4 == 2 && num_flag_top>0) {
			temp1 = small_div[parseInt(num_flag_top)].style.left;
			temp2 = small_div[parseInt(num_flag_top)].style.top;
			small_div[parseInt(num_flag_top)].style.left=ini_positionx;
			small_div[parseInt(num_flag_top)].style.top=ini_positiony;
			ini_positionx=temp1;
			ini_positiony=temp2;
		}
		else if(rand%4 == 3 && num_flag_bottom>0) {
			temp1 = small_div[parseInt(num_flag_bottom)].style.left;
			temp2 = small_div[parseInt(num_flag_bottom)].style.top;
			small_div[parseInt(num_flag_bottom)].style.left=ini_positionx;
			small_div[parseInt(num_flag_bottom)].style.top=ini_positiony;
			ini_positionx=temp1;
			ini_positiony=temp2;
		}
	}
}

function on_mouse() {
	this.style.border="2px solid red";
}

function out_mouse() {
	this.style.border="2px solid black";
}

function change_position() {
	var temp1, temp2;
	var x = ini_positionx[0], y = ini_positiony[0];
	var v_left = this.style.left[0], v_top = this.style.top[0];
	if (((v_left- x == 1 ||x - v_left == 1) && (y == v_top)) || ((v_top- y == 1 ||y - v_top == 1) && (x == v_left))) {
		temp1 = this.style.left;
		temp2 = this.style.top;
		this.style.left=ini_positionx;
		this.style.top=ini_positiony;
		ini_positionx = temp1;
		ini_positiony = temp2;
	}
}

function ready_bg_image() {
	ini_positionx = "300px";
	ini_positiony = "300px";
	var h, w;
	for (var i = 2; i < small_div.length - 2; i ++) {
		h = parseInt((i - 2)/4 )* 100;
		w = (i - 2)%4 * 100;
		small_div[i].style.position="absolute";
		small_div[i].style.left=w+"px";
		small_div[i].style.top=h+"px";
		small_div[i].style.backgroundImage="url(src/pic0.jpg)";
		small_div[i].style.backgroundPosition=0-w + "px " + (-h) + "px";
		small_div[i].style.width=96+"px";
		small_div[i].style.height=96+"px";
		small_div[i].style.border="2px solid black";
		
	}
}