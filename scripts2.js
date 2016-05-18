var ul = document.createElement('ul');
document.body.appendChild(ul);
 
var a = {
	display: 'block',
	position: 'fixed',
	left: '0',
	marginTop: '-141px',
	listStyle: 'none',
	fontSize: '20px',
	color: 'white',
	cursor: 'pointer',
}

for(var key in a){
  ul.style[key] = a[key];
}

var li1 = document.createElement('li');
ul.appendChild(li1);
var li2 = document.createElement('li');
ul.appendChild(li2);
var li3 = document.createElement('li');
ul.appendChild(li3);
var li4 = document.createElement('li');
ul.appendChild(li4);
var li5 = document.createElement('li');
ul.appendChild(li5);
var li6 = document.createElement('li');
ul.appendChild(li6);

var s = {
	width: '125px',
	height: '25px',
	color: 'white',
	backgroundColor: '#35baf6',
	border: '1px solid #0cacf4',
	textAlign: 'center',
	textDecoration: 'none',
	fontSize: '20px',	  
}

for(var key in s){
  li1.style[key] = s[key];
  li2.style[key] = s[key];
  li3.style[key] = s[key];
  li4.style[key] = s[key];
  li5.style[key] = s[key];
  li6.style[key] = s[key];
}

li6.style.borderRadius = '0 0 15px 15px';
li6.id = 'topmenu';

li1.id = 'menu1';
li2.id = 'menu2';
li3.id = 'menu3';
li4.id = 'menu4';
li5.id = 'menu5';

li1.innerHTML = 'Menu 1';
li2.innerHTML = 'Menu 2';
li3.innerHTML = 'Menu 3';
li4.innerHTML = 'Menu 4';
li5.innerHTML = 'Menu 5';
li6.innerHTML = 'Top menu';


function mouseOverMenuN() {
	this.style.backgroundColor = '#03a9f4'; 
}

function mouseOutMenuN() {
	this.style.backgroundColor = '#35baf6'; 
}

document.getElementById('menu1').addEventListener('mouseover', mouseOverMenuN);
document.getElementById('menu2').addEventListener('mouseover', mouseOverMenuN);
document.getElementById('menu3').addEventListener('mouseover', mouseOverMenuN);
document.getElementById('menu4').addEventListener('mouseover', mouseOverMenuN);
document.getElementById('menu5').addEventListener('mouseover', mouseOverMenuN);

document.getElementById('menu1').addEventListener('mouseout', mouseOutMenuN);
document.getElementById('menu2').addEventListener('mouseout', mouseOutMenuN);
document.getElementById('menu3').addEventListener('mouseout', mouseOutMenuN);
document.getElementById('menu4').addEventListener('mouseout', mouseOutMenuN);
document.getElementById('menu5').addEventListener('mouseout', mouseOutMenuN);


var topmenu = document.getElementById('topmenu');

function mouseOver() {
	
	this.style.boxShadow = "-5px 3px 5px #a3dffb, 5px 3px 5px #a3dffb";	
}

function mouseOut() {

	this.style.boxShadow = "-5px 3px 5px transparent, 5px 3px 5px transparent";
}
topmenu.addEventListener('mouseover', mouseOver);
topmenu.addEventListener('mouseout', mouseOut);

function mouseClick() {
	ul.style.marginTop = "-7px";	
}	

topmenu.addEventListener('click', mouseClick);



