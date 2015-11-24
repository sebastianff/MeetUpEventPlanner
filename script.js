$('.info').hide();
$('.event').hide();

$('.start').click(function(){
	$('.info').show(300);
});
$('.forward').click(function(){
	$('.info').hide(300);
	$('.event').show(300);
})


$('.forward').click(function(){
	$('.event').hide(300);
})