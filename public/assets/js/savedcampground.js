$(document).ready(function () {
  //saves the site to the database when the button is clicked
  $(".save-site").on("click", function () {
    let newCampsite = {
      name: $(".campName").val().trim(),
      location: $(".campLocation").val().trim(),
      description: $(".campDescription").val().trim(),
      rating: $(".campRating").val().trim()
    };

    $.ajax({
      url: "api/campsites",
      method: "POST",
      data: newCampsite
    }).then(function() {
      location.reload();
      console.log(newCampsite);
    });

    console.log(newCampsite);
  });

  //Delete the campsite we inserted
  $(".delete-btn").on("click", function() {
    let id = $(this).data("id");

    $.ajax({
      url: "api/campsites/" + id,
      method: "DELETE",
    }).then(function() {
      location.reload();
    });
  });
});