function validate() {
    //THIS IS THE EVENT DATES (FROM-TO DATES)
    var eventOne = new Date(document.getElementById('eventDateRange1').value);
    var eventTwo = new Date(document.getElementById('eventDateRange2').value);

    if(eventOne.getTime() > eventTwo.getTime()) {
        return false;
    }
    else if(eventOne.getTime() < eventTwo.getTime()) {
        return true;
    }
    else {
        return true;
    }
}

function validateEntry() {
    //Var = variables na contains information and has a name. 
    var x1=document.getElementById('eventTypes').value;
    var x2=document.getElementById('title').value;
    var x3=document.getElementById('eventDateRange1').value;
    var x4=document.getElementById('eventDateRange2').value;
    var x5=document.getElementById('eventPostDate').value;
    var x6=document.getElementById('moreDetails1').checked;
    var x7=document.getElementById('moreDetails2').checked;
    var x8=document.getElementById('moreDetails3').checked;
    var x9=document.getElementById('moreDetails4').checked;
    var x10=document.getElementById('moreDetails5').checked;

    if(validate() == true) {
        alert("Entry saved Database! \n \n Your early entry was: \n \n EVENT TYPE: " + x1 + "\n EVENT TITLE: " + x2 + "\n EVENT DATE FROM: " + x3 + " TO " + x4 + "\n EVENT POSTING DATE: " + x5 + "\n \n Unchecked = False | Checked = True \n \n Reqistration required? " + x6 + "\n Association with Family Programs? " + x7 + "\n Receive auto-generated email? " + x8 + "\n POC? " + x9 + "\n Hosting of POC? " + x10);
    }
    else if(validate() == false){ 
        alert("Error! Event Dates do not match correctly.");
    }
}