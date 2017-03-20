$(function() {
  var addr = ['ktmcbratney','+','letstalk','@','gmail','.','com'];
  var sub = 'Let\'s Talk';
  $('#email').click(function(evt){
    evt.preventDefault();
    window.location = 'mailto:' + addr.join('') + '?' + sub;
  });
});
