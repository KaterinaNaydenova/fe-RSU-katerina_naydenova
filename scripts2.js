	$('body').append('<ul>');
	$('ul').css({'cursor': 'pointer',
	'color': 'white',
	'fontSize': '15px',
	'marginTop': '-97px',
	'left': '0',
	'display': 'block',
	'position': 'fixed',})

	$('ul').append('<li class="li1">');
	$('ul').append('<li class="li2">');
	$('ul').append('<li class="li3">');
	$('ul').append('<li class="li4">');
	$('ul').append('<li class="li5">');
	$('ul').append('<li class="TopMenu">');

	
$('.li1').text('Menu1');
$('.li2').text('Menu2');
$('.li3').text('Menu3');
$('.li4').text('Menu4');
$('.li5').text('Menu5');
$('.TopMenu').text('TopMenu');

$('li').css({
	'width': '125px',
	'height': '16px',
	'background-color': '#35baf6',
	'border': '1px solid #0cacf4',
	'text-align': 'center',
	
})

$('.TopMenu').css({'border-radius': '0 0 5px 5px'})

$('.TopMenu').on('click',function(){
$('ul').css({'marginTop': '-10px'})
});	

$('li').on('mouseover', function(){
	$(this).css({'background-color': '#0cacf4'})
});

$('li').on('mouseleave', function(){
	$('li').css({'background-color': '#35baf6'})
});

$('.TopMenu').on('mouseover', function(){
$('.TopMenu').css({'box-shadow': '-5px 3px 5px #a3dffb'})
});	

$('.TopMenu').on('mouseleave', function(){
$('.TopMenu').css({'box-shadow': 'none'})
});	










