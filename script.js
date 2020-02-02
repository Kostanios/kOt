
//alert("Sucsesfully");
//const fs = require("fs");
//fs.writeFile("data.txt", "Привет ми ми ми!");
class event {
  constructor(date,comment) {
    this.date = date;
    this.comment = comment;
  }
  getDate(){return this.date;}
  getComment(){ return this.comment;}
}

var buttonAddEvent = document.getElementById("addEvent")
let eventData =[];

function redyToAdd(){
  document.getElementById("data").hidden = false;
  document.getElementById("dataSAVE").hidden = false;
  document.getElementById("dataComment").hidden = false;
}


function saveDataOfEvent (){

  var EventTime = document.getElementById("data").value;
  var EventComment = document.getElementById("dataComment").value;
  eventData.push(new event(EventTime,EventComment));
  document.getElementById("data").hidden = true;
  document.getElementById("dataSAVE").hidden = true;
  document.getElementById("dataComment").hidden =true;

}

function eventsShow(){
  var length=eventData.length;
  var allEvents="";
  for(var i = 0 ; i < length ; i++){
      allEvents += "|"+(i+1)+"|"+eventData[i].getDate()+" "+eventData[i].getComment()+"<br>";
  }
  document.getElementById("eventsShow").innerHTML =allEvents;
  document.getElementById("eventsShow").hidden = false;
}

function deleteEvent(){
    document.getElementById("deleteEvent").hidden = false;
    document.getElementById("deleteButton").hidden = false;
    document.getElementById("deleteNumber").hidden =false;
}

function deleteButton(){
  document.getElementById("deleteEvent").hidden = true;
  document.getElementById("deleteButton").hidden = true;
  document.getElementById("deleteNumber").hidden = true;
  eventData.splice(document.getElementById("deleteNumber").value-1,1);
}

function changeEventButton(){
  if(eventData.length > 0){
  document.getElementById("changeEvent").hidden = false;
  document.getElementById("changeNumber").hidden = false;
  document.getElementById("okChange").hidden = false;
}
else {
alert("You haven't saved events yet");
}
}

var number;

function chooseEvent(){
  if(document.getElementById("changeNumber").value > eventData.length){
    alert("You don't have an event with this number, try again...")
  }
  else {
    number = document.getElementById("changeNumber").value;
    document.getElementById("changeEvent").hidden = true;
    document.getElementById("changeNumber").hidden = true;
    document.getElementById("okChange").hidden = true;
    document.getElementById("wantToChangeDate").hidden = false;
    document.getElementById("wantToChangeComment").hidden = false;
  }

}

    function wantToChangeDate (){
      document.getElementById("wantToChangeDate").hidden = true;
      document.getElementById("wantToChangeComment").hidden = true;

      document.getElementById("changeDateValue").hidden = false;
      document.getElementById("changeDate").hidden = false;
    }

    function wantToChangeComment(){
      document.getElementById("wantToChangeDate").hidden = true;
      document.getElementById("wantToChangeComment").hidden = true;

      document.getElementById("changeComment").hidden = false;
      document.getElementById("changeCommentValue").hidden = false;
    }

function ChangeComment(){

  eventData[number-1].comment = document.getElementById("changeCommentValue").value;

  document.getElementById("changeComment").hidden = true;
  document.getElementById("changeCommentValue").hidden = true;

}
function ChangeDate(){
  eventData[number-1].date = document.getElementById("changeDateValue").value;

  document.getElementById("changeDate").hidden = true;
  document.getElementById("changeDateValue").hidden = true;

}
