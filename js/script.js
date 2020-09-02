function validate() {
    //THIS IS THE EVENT DATES (FROM-TO DATES)
    var eventOne = new Date(document.getElementById('eventDateRange1').value);
    var eventTwo = new Date(document.getElementById('eventDateRange2').value);
    var eventThree = new Date(document.getElementById('eventPostDate').value);
/*
    if(eventOne.getTime() > eventTwo.getTime()) {
        return false;
    }
    else if(eventOne.getTime() < eventTwo.getTime()) {
        return true;
    }
    else {
        return true;
    }
*/
    /** Post Date should always be set before the Start of the Event*/
    if((eventOne.getTime() >= eventTwo.getTime()) && (eventThree.getTime() > eventOne.getTime())) {
        return false;
    }
    else if((eventOne.getTime() <= eventTwo.getTime()) && (eventThree.getTime() < eventOne.getTime())) {
        return true;
    }
    else {
        return false;
    }
}

/*
Tested by Catena - no logical errors and it runs smoothly.
*/

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
        alert("Error! Event Dates and/or Post Dates do not match correctly. \n \n Remember that Post-Date must always be set before the Start of the Event, nothing else. \n \n On the other hand, one (1) day event is applicable in our services. \n \n And so, try to input another valid DATE.");
    }
}

/*
Tested by Catena - Validation success.
*/