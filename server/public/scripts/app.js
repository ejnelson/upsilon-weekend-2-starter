var currentPerson=0;
var time=10;
var timer = setInterval(function(){
  if(time==0){
    next();
    time=11;
  }
	time--;
  console.log(time);
		}, 1000);
$(document).ready(function(){

  $('#next').on('click',next);
  $('#previous').on('click',previous);

});

function switchPerson(person){
  $('#person').animate({opacity:0},500);
  setTimeout(function(){
    $('#persongit').text(person.githubUserName);
    $('#personname').text(person.name);
    $('#personshoutout').text(person.shoutout);
  }, 500);

  $('#person').animate({opacity:1},500);
};

function next(){
  time=10;
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      console.log(data);
      $('#'+currentPerson).animate({opacity:0},1000);
      if(currentPerson<15){
      currentPerson++;}
      $('#'+currentPerson).animate({opacity:1},1000);
      var person=data[currentPerson];
      switchPerson(person);
    }
  });
}
function previous(){
  time=10;
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      console.log(data);
      $('#'+currentPerson).animate({opacity:0},1000);
      if(currentPerson>0){
      currentPerson--;}
      $('#'+currentPerson).animate({opacity:1},1000);
      var person=data[currentPerson];
      switchPerson(person);
    }
  });
}
