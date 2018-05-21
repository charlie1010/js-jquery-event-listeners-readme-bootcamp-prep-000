function getIt() {
  $('p').on("click", function() {
    return "Hey!"
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
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
  $('form').on('submit', function() {
      alert('your form is going to be submitted now')
      return
    }
    alert("you entered the wrong value")
    return
  })
}

//if ($("input:first").val() === "correct") {

//define functions here

$(document).ready(function(){

// call functions here

});
