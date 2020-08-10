$(document).ready(function () {
    $(".save-btn").on("click", function (event) {
        event.preventDefault();

        let updatedSite = {
            name: $(".campName").val().trim(),
            location: $(".campLocation").val().trim(),
            description: $(".campDescription").val().trim(),
            rating: $(".campRating").val().trim(),
            hasVisited: true
        };

        let id = $(this).data("id");

        $.ajax("/api/campsites/" + id, {
            type: "PUT",
            data: updatedSite
        }).then(function () {
            location.href = "/saved";
        });
    });
});