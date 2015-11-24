var myDataRef = new Firebase('https://shining-fire-6551.firebaseio.com/');

var getInfo = function(){
	var name = $('#name').val();
	var email = $('#email').val();
	var pass = $('#pass').val();
	var eventName = $('#eventName').val();
	var eventType = $('#eventType').val();
	var eventStart = $('#eventStart').val();
	var eventEnd = $('#eventEnd').val();

	myDataRef.push({name:name,email:email,eventName:eventName,eventType:eventType,eventStart:eventStart,eventEnd:eventEnd});
	myDataRef.on('child_added', function(snapshot) {
  			var message = snapshot.val();
  			displayChatMessage(message.name,message.email,message.eventName,message.eventType,message.eventStart,message.eventEnd);
	});
}

var displayChatMessage = function(name,email,eName,eType,start,evEnd){
	$('.eventTable').append('<div class="okvir"><h1>'+name+'</h1><p>'+email+'</p><p>'+eName+'</p><p>'+eType+'</p><p>'+start+'</p><p>'+evEnd+'</p></div>'
		)

}

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
	$('.eventTable').show(300);
})

$('.showEvents').click(function(){
	$('.event').hide(300);
	$('.info').hide(300);
	$('.eventTable').show(300);
	getInfo();
})






//myDataRef.set('User ' + name + ' says ' + text);