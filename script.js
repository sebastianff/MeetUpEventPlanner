var myDataRef = new Firebase('https://shining-fire-6551.firebaseio.com/');

var addInfo = function(){
	var name = $('#name').val();
	var email = $('#email').val();
	var pass = $('#pass').val();
	var eventName = $('#eventName').val();
	var eventType = $('#eventType').val();
	var eventStart = $('#eventStart').val();
	var eventEnd = $('#eventEnd').val();
	var evLocation = $('#location').val();
}

var sendInfo = function(){
	myDataRef.push({
		name:name,
		email:email,
		eventName:eventName,
		eventType:eventType,
		eventStart:eventStart,
		eventEnd:eventEnd,
		evLocation:evLocation
	});
}

var getInfo = function(){
	myDataRef.on('child_added', function(snapshot) {
  			var message = snapshot.val();
  			displayChatMessage(message.name,message.email,message.eventName,message.eventType,message.eventStart,message.eventEnd,message.evLocation);
	});
}



var displayChatMessage = function(name,email,eName,eType,start,evEnd,evLocation){
	$('.eventTable').append(
			'<div class="col-md-6">\
			<div class="panel panel-default">\
			<div class="panel-body">\
			<h1>Name: '+name+'</h1>\
			<p>Email: '+email+'</p>\
			<p>Type of event: '+eName+'</p>\
			<p>Event name: '+eType+'</p>\
			<p>start time: '+start+'</p>\
			<p>End time: '+evEnd+'</p>\
			<p>Location: '+evLocation+'</p>\
			</div>\
			</div>\
		</div>'
		)

}

$('.firstForm').hide();
$('.secondForm').hide();
$('.eventTable').hide();


$('.start').click(function(){
	$('.eventTable').hide();
	$('.secondForm').hide();
	$('.firstForm').hide();
	$('.firstForm').show(300);
});

$('.forward').click(function(){
	$('.eventTable').hide();
	$('.firstForm').hide();
	$('.secondForm').show(300);
})


$('.lastOne').click(function(){
	$('.eventTable').hide();
	$('.secondForm').hide(300);
	$('.eventTable').show(300);
	addInfo();
	sendInfo();
})

$('.showEvents').click(function(){
	$('.secondForm').hide(300);
	$('.firstForm').hide(300);
	$('.eventTable').show(300);
	getInfo();
})

getInfo();


//myDataRef.set('User ' + name + ' says ' + text);