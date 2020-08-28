function validate(){
  var types = document.formEvent.eventTypes.value;
  var title =document.formEvent.eventTitle.value;
  var fromDate =document.formEvent.fromDate.value;
  var toDate = document.formEvent.toDate.value;
  var postingDate = document.formEvent.postingDate.value;

  if (types == ""){
      alert("Event Type is required!");
      return false;
  }

  if (title == ""){
      alert("Event Title is required!");
      return false;
  }
  
  if (fromDate == ""){
      alert("Event Date is required!");
      return false;
  }
  if (toDate ==""){
      alert("Event Date is required!");
      return false;
  }

  if (postingDate == ""){
      alert("Posting Date is required!");
      return false;
  }
  
  else {
    alert("Event has been successfully saved!");
     return true;
  }
  

}
 