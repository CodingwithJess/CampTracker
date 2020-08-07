$(document).ready(function() {
  $(".save-site").on("click", function(){
    const newCampsite = {
      name: $(".campName").val().trim(),
      location: $(".campLocation").val().trim(),
      description: $(".campDescription").val().trim(),
      rating: $(".campRating").val().trim(),
    };

    $.ajax({
        url: "api/campsites",
        type: "POST",
        data: newCampsite,
        success: function() { console.log(newCampsite)}
    });
    //$.ajax("api/campsites", {body: newCampsite})
    //  .then(function() {
    //    console.log(newCampsite);
    //  });
  });
});






