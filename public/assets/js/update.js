$(".edit-site").on("click", function (event) {
    event.preventDefault();

    let editedSite = {
        name: $(".campName").val().trim(),
        location: $(".campLocation").val().trim(),
        description: $(".campDescription").val().trim(),
        rating: $(".campRating").val().trim(),
        hasVisited: true
    };

    let id = $(this).data("id");

    // Send the POST request.
    $.ajax("/api/campsites/" + id, {
        type: "PUT",
        data: editedSite
    }).then(
        function () {
            console.log("");
            // Reload the page to get the updated list
            location.assign("/api/campsites/");
        }
    );
});