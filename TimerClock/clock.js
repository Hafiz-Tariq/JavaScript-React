//Clock javascript

var wakeuptime =  7;
var noon = 12;
var evening = 18;

//Getting to know the Exact time

var printCurrentTime = function(){
  var clock = document.getElementById('clock');
  var currenttTime =  new Date();
  var hours = currenttTime.getHours();
  var min = currenttTime.getMinutes();
  var sec = currenttTime.getSeconds();
  var meridian = "AM" ;

  //Settng Hours
  if(hours>= noon){
    meridian = "PM";
  }
  if(hours > noon ){
    hours = hours- 12 ; 
  }
  //setting minutes like 01,02
  if(min < 10){
    min = "0" + min;
  }
  //setting second
  if(sec < 10){
    sec = "0" + sec;
  }
  //Display the time
  var clockTime = hours + ":" + min + ':' + sec + ':' + meridian + '!' ;
  clock.innerText = clockTime;
  setTimeout('printCurrentTime()',1000);
}
printCurrentTime();