$(document).ready(function(){


    // some vars needed
    toDay = moment().format('MMMM Do YYYY');
    var timeNow24 = moment().format('H');
    //timeNow24 =13; // for testing & debug
    var timeNow12 = moment().format('h');
    var mainDiv = $(".container"); 
    var storedEventsArray = [];
    var getValue = [];
    for (var z = 0; z < 9; z++){
        getValue[z] = "";
    } 

    //  display todays date for header    
    $("#currentDay").text(toDay);

     // build rows date, must use 24 hr time so rows are  in order
     for(var i = 9; i <=17; i++) {

         var hour12 = i - 9;  // 12 hour time
        
        // build rows
        var tbRow = $("<div>");
        tbRow.addClass("row timeBlockRow");
        tbRow.attr("value", i);

        // add time box column
        var col2Timebox = $("<div>")
        col2Timebox.addClass("col-md-2 time-block");
        tbRow.append(col2Timebox);

        // set timebox time
        var showHour = 0;
           var ampm = "";
        if (i > 12) { 
            showHour = i - 12;
            ampm = "pm";
        }  else {
            showHour = i;
            ampm = "am";
        }
        if(i===12) {ampm = "pm";}
        col2Timebox.text(showHour + " " + ampm);


        // add column with textarea
        var col9Timebox = $("<div>");
        col9Timebox.addClass("col-md-9"); 
        col9Timebox.attr("id", hour12);
        tbRow.append(col9Timebox);

        var colTextArea =  $("<textarea>");
        colTextArea.attr("id", `inputId-${hour12}`);
        colTextArea.attr("rows", 3);
        colTextArea.attr("cols", 80); 
        col9Timebox.append(colTextArea);
        

        // add save column , there is a div and button
        var col1TimeBox = $("<div>");
        col1TimeBox.addClass("col-md-1 save"); 

        var saveDiv = $("<div>");
        saveDiv.attr("id",`saveId-${hour12}`)
        col1TimeBox.append(saveDiv);

        var saveBtn = $("<i>");
        //saveBtn.attr("id",`saveId-${hour12}`);
        //saveBtn.attr("save-id", hour12);
        saveBtn.attr("class","far fa-save exSave");
        saveDiv.append(saveBtn);
 
        tbRow.append(col1TimeBox);


        // add the row
        mainDiv.append(tbRow);

        // call row color function
        setRowColor(tbRow, i,  hour12);

        // update text
        updateText()

     }


     // update color fumction row colors based on time of day
     function setRowColor (curRow, hour, id) { 
        if ( hour < timeNow24) {
            curRow.addClass("past");
        } else if ( hour > timeNow24) {  
            curRow.addClass("future")
        } else {
            curRow.addClass("present");
        }
    }

    // update  storage fumction
   function setEvents (index, value){
    console.log("index: " + index + " value: "  + value);
    storedEventsArray.push({indexID:index,idValue:value});
    localStorage.setItem("storedEvents", JSON.stringify(storedEventsArray));
   }


  // updates text and added "already happened" 
 function updateText() {
  // Get stored  events
  var storedEvents = JSON.parse(localStorage.getItem("storedEvents"));

  // if events put into an array
  if(storedEvents != null) {
     storedEventsArray = storedEvents; 
     console.log(storedEvents[0].indexID + " " + storedEvents[0].idValue);

     for (var z = 0; z < storedEvents.length; z++){
         var getId    = storedEvents[z].indexID;
         getValue[getId] = storedEvents[z].idValue;

         if(getValue[getId] != "") {
            textAreaId = '#inputId-'+getId;
            var showIt =  getValue[getId];

            hour = getId + 9;                 
            if ( hour < timeNow24) {
                var txtEx = " > Already Happened";
                showIt += txtEx;  
             }

            $('#inputId-'+getId).val(showIt);
         }  

         console.log("id: " + getId + "  value: " + getValue[getId]);
     }
   }
 } 
 



  // listeners (yes I know it's is ugly)  these need delegation 
    $("#saveId-0").on( "click", function(event) {
        var index = 0; 
        var value = $('#inputId-'+index).val();
        if(value!=""){setEvents(index,value); }
    });
    $("#saveId-1").on( "click", function(event) {
        var index = 1; 
        var value = $('#inputId-'+index).val();
        if(value!=""){ setEvents(index,value);  }
    });
    $("#saveId-2").on( "click", function(event) {
        var index = 2; 
        var value = $('#inputId-'+index).val();
        if(value!=""){ setEvents(index,value); }
    });
    $("#saveId-3").on( "click", function(event) {
        var index = 3; 
        var value = $('#inputId-'+index).val();
        if(value!=""){ setEvents(index,value); }
    }); 
    $("#saveId-4").on( "click", function(event) {
        var index = 4; 
        var value = $('#inputId-'+index).val();
        if(value!=""){ setEvents(index,value); }
    });    
    $("#saveId-5").on( "click", function(event) {
        var index = 5; 
        var value = $('#inputId-'+index).val();
        if(value!=""){ setEvents(index,value); }
    }); 
    $("#saveId-6").on( "click", function(event) {
        var index = 6; 
        var value = $('#inputId-'+index).val();
        if(value!=""){ setEvents(index,value); }
    }); 
    $("#saveId-7").on( "click", function(event) {
        var index = 7; 
        var value = $('#inputId-'+index).val();
        if(value!=""){ setEvents(index,value); }
    }); 
    $("#saveId-8").on( "click", function(event) {
        var index = 8; 
        var value = $('#inputId-'+index).val();
        if(value!=""){ setEvents(index,value); }
    });                    
    
    


});

 
     
     

