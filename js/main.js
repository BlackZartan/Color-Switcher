function changeColor() {
	var theme = $(this).attr('class');
	$('body').attr('class', theme)
}

$(document).ready(function() {
	$('#switcher li').click(changeColor);
});



$('.gray').click(switchGray);
$('.white').click(switchWhite);
$('.blue').click(switchBlue);
$('.yellow').click(switchYellow);

function switchGray() {
  $('body').attr('class', 'gray');
}

function switchWhite() {
  $('body').attr('class', 'white');
}

function switchBlue() {
  $('body').attr('class', 'blue');
}

function switchYellow() {
  $('body').attr('class', 'yellow');
}
