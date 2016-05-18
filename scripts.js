// Header

var h2 = document.createElement('h2');
document.body.appendChild(h2);

var b = {
	  width: '100%',
	  textAlign: 'center',
	  fontSize: '30px',
	  fontFamily: 'Pompadur, Comic Sans MS, cursive',
}

for(var key in b){
  h2.style[key] = b[key];
}

h2.innerHTML = 'ToDO List';

var div = document.createElement('div');
document.body.appendChild(div);

var a = {
	  width: '350px',
	  border: '2px dashed black',
	  textAlign: 'center',
	  fontSize: '30px',
	  fontFamily: 'Pompadur, Comic Sans MS, cursive',
	  overflowY: 'scroll',
	  height: '350px',
	  position: 'absolute',
      left: '40%',
}

for(var key in a){
  div.style[key] = a[key];
}

var ul = document.createElement('ul');
div.appendChild(ul);

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

var s = {
	height: '25px',
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
}


li1.innerHTML = 'ToDO Item 1';
li2.innerHTML = 'ToDO Item 2';
li3.innerHTML = 'ToDO Item 3';
li4.innerHTML = 'ToDO Item 4';
li5.innerHTML = 'ToDO Item 5';

//Input Text

var input = document.createElement('input');
document.body.appendChild(input);

input.setAttribute ('placeholder', 'ToDo');


var inputStyle = {
	position: 'absolute',
	left: '35%',
	top: '60%',
}

for(var key in inputStyle){
  input.style[key] = inputStyle[key];
};


//Button Add
var button = document.createElement('button');
document.body.appendChild(button);

var buttonStyle = {
	width: '50px',
	height: '20px',
	position: 'absolute',
    left: '55%',
	top: '60%',
}
 
for(var key in buttonStyle){
  button.style[key] = buttonStyle[key];
};

button.innerHTML = "Add"

//Action Add

function mouseClick() {
	var NewEl = document.createElement('li');	
	NewEl.innerHTML = document.getElementsByTagName('input')[0].value; 
	result = confirm ('Are you sure you want to add new ToDo item' + NewEl.innerHTML +'?');
	if (result) {		 
		ul.appendChild(NewEl);
		var st = {
			textAlign: 'center',
			textDecoration: 'none',
			fontSize: '20px',  
		}
		for(var key in st) {
			NewEl.style[key] = st[key];
		}
		} else {
			alert('No New Task')
		}		
	}	
	
button.addEventListener ('click', mouseClick);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
