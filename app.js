var myDataRef = new Firebase('https://shining-fire-6551.firebaseio.com/');
$('.form-group').keypress(function (e) {
        if (e.keyCode == 13) {
          var name = $('#name').val();
          var text = $('#email').val();
          var pwd = $('#pwd').val();
          myDataRef.push({name: name, text: text, pwd: pwd});
          $('#messageInput').val('');
          $('.eventInfo').hide();
        };

});
var paragraph = "<p>data</p>";
myDataRef.on('child_added', function(snapshot) {
        var message = snapshot;
        console.log(message[0]);
});
$('.eventInfo').hide();
$('button').click(function(){$('.eventInfo').toggle(900)});