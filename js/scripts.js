var age = parseInt("age.").val();

function ageRange(age){
  if (age>= 18) var legal = true;
  else legal = false;
  return legal;
});

$(document).ready(function() {
  $("#form-group").submit(function(event) {
    if ageRange(age)===true;
      $("#register").show();
    if ageRange(age)===false;
      $("#learn").show()  
  });
});




