// ! have to use this to use the api keys;
// require("dotenv").config();

// ! api key variable
// ! this is how you use the api key
// const apiKey = "CZVR6fXJif7hAnfiau0MJRZbv1q88WsLspf50c4o"
// function call() { 

$(document).ready(function () {
    //saves the site to the database when the button is clicked
    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        let newCampsite = {
            name: $(".campName").val().trim(),
            location: $(".campLocation").val().trim(),
            description: $(".campDescription").val().trim(),
        };

        $.ajax({
            url: "/api/campsites",
            method: "POST",
            data: newCampsite

        }).then(function () {
            location.reload();
            // console.log(newCampsite);
        });

        // console.log(newCampsite);
    });

    //Delete the campsite we inserted
    $(".delete-btn").on("click", function () {
        let id = $(this).data("id");

        $.ajax({
            url: "api/campsites/" + id,
            method: "DELETE",
        }).then(function () {
            location.reload();
        });
    });
});