var div1 = document.createElement('div');
document.body.appendChild(div1);

var s = {
	
	  width: '98,2%',
	  height: '200px',
	  backgroundColor: '#76EEC6',
	  border: '2px solid rgb(106,173,158)',
	  borderRadius: '10px',
}
 
for(var key in s){
  div1.style[key] = s[key];
}


var div2 = document.createElement('div');
div1.appendChild(div2);
var d = {
	position: 'relative',
	height: '91%',
	width: '98.65%',
	top: '4%',
	left: '0.5%',
	bottom: '4%',
	fontFamily: 'sans-serif',
	border: '2px solid rgb(53,195,174)',
	backgroundColor: 'white',
			}
for(var key in d){
    div2.style[key] = d[key];
}

var div3 = document.createElement('div');
div2.appendChild(div3);
var	f = {

	margintop: '0px',
	left: '0px',
	right: '0px',

	height: '23%',
	backgroundColor: '#FFD700',
	paddingLeft: '2%',
	paddingTop: '0.4%',
	fontSize: '25px',
	}
	
for(var key in f){
    div3.style[key] = f[key];
}
div3.innerHTML = 'Header';

var div4 = document.createElement('div');
div2.appendChild(div4);

var g = {

	width: '0px',
	marginLeft: '2%',
	border: '20px solid transparent', 
	borderTopColor: '#FFD700',
}
for(var key in g){
    div4.style[key] = g[key];
}

var div5 = document.createElement('div');
div2.appendChild(div5);



var p = document.createElement('p');
div5.appendChild(p);

var j = {
	marginLeft: '2%',
	marginTop: '0%',
	overflow: 'auto',
}

for(var key in j){
   p.style[key] = j[key];
}

p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."; 

