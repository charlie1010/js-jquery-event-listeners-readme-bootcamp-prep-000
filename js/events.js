function getIt() {
  $('p').on("click", function() {
    return "Hey!"
  })
}

function frameIt() {
  $('img').on('load', function() {
    
  })
}

function pressIt() {
  $(document).on('keydown', function(key) {
    if(key.which == 71) {
      alert("g was pressed")
    }
  })
}

function submitIt() {
  $(document).on('submit', function() {
    if ($("input:first").valu() === "correct") {
      alert('your form is going to be submitted now')
      return
    }
    alert("you entered the wrong value")
    return
  })
}


//define functions here

$(document).ready(function(){

// call functions here

});
