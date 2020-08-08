// //  all of our code goes inside of this
// $(document).ready(function() {
//   // todo: get all of our html variables

// todo: create a new campsite and send it to our database
$(".create-form").on("submit", function (event) {
  event.preventDefault();

  const newCampSite = {
    // it will look something like this
    name: $(".campName").val().trim(),
    location: $(".campLocation").val().trim(),
    description: campDescription.val().trim(),
    rating: rating.val().trim(),
  };
  $.ajax("api/campsites", {
    type: "POST",
    data: newCampSite,
  }).then(function () {
    console.log("created new campsite");
    location.reload();
  });
});

//todo: create a function where we create a new campsite

//todo: create a function to delete a post
$(".delete-campsite").on("click", function (event) {
  event.preventDefault();

  const id = $(this).data("id");
  $.ajax("/api/campsites" + id, {
    type: "DELETE",
  }).then(function () {
    console.log("deleted campsite", id);
    location.reload();
  });
});


