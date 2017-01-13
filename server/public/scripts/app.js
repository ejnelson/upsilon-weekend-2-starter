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
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      var person=data[currentPerson];
      switchPerson(person);
    }});
  $('#next').on('click',next);
  $('#previous').on('click',previous);
  $('#container div').on('click',function(){
    $('#'+currentPerson).animate({opacity:0.4},1000);
    currentPerson=$(this).attr("id");

    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        var person=data[currentPerson];
        switchPerson(person);
      }
    });
    $('#'+currentPerson).animate({opacity:1},1000);
    time=10;

  });
});

function switchPerson(person){
  $('#person').animate({opacity:0},500)
  // $('#person').animate({left:1000},500);
  setTimeout(function(){

    $('#persongit').text(person.githubUserName);
    $('#personname').text(person.name);
    $('#personshoutout').text(person.shoutout);
    $('#persongit').attr('href','http://www.github.com/'+person.githubUserName);
  }, 500);
  // $('#person').animate({left:'0px'},500);
  $('#person').animate({opacity:1},500);
};

function next(){
  time=10;
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      console.log(data);
      $('#'+currentPerson).animate({opacity:0.4},1000);
      if(currentPerson<16){
      currentPerson++;}else{
        currentPerson=0;
      }
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
      $('#'+currentPerson).animate({opacity:0.4},1000);
      if(currentPerson>0){
      currentPerson--;}else{
        currentPerson=16;
      }
      $('#'+currentPerson).animate({opacity:1},1000);
      var person=data[currentPerson];
      switchPerson(person);
    }
  });
}
