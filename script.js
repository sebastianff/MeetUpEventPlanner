$('.info').hide();
$('.event').hide();
$('.eventTable').hide();


$('.start').click(function(){
	$('.eventTable').hide();
	$('.info').show(300);
});
$('.forward').click(function(){
	$('.info').hide(300);
	$('.eventTable').hide();
	$('.event').show(300);
})


$('.lastOne').click(function(){
	$('.eventTable').hide();
	$('.event').hide(300);
})

$('.showEvents').click(function(){
	$('.event').hide(300);
	$('.info').hide(300);
	$('.eventTable').show(300);
})