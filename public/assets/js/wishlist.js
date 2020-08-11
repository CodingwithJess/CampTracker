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
      url: "api/campsites",
      method: "POST",
      data: newCampsite,
    }).then(function () {
      location.reload();
      console.log(newCampsite);
    });

    console.log(newCampsite);
  });

  //saves the site to the database when the button is clicked
  $(".visit-btn").on("click", function (event) {
    let id = $(this).data("id");
    let newVisitState = {
      hasVisited: 1
    };

    // Send the PUT request.
    $.ajax("/api/campsites/" + id, {
      type: "PUT",
      data: newVisitState
    }).then(
      function () {
        console.log("changed visited to true");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  function campSearch() {
    event.preventDefault();
    const state = $(".stateCode").val().trim().toUpperCase();
    const key = "CZVR6fXJif7hAnfiau0MJRZbv1q88WsLspf50c4o";
    var queryUrl = "https://developer.nps.gov/api/v1/campgrounds?stateCode=" + state + "&limit=15&api_key=" + key;
    return new Promise((resolve, reject) => {
      $.ajax({
        url: queryUrl,
        method: "GET"
      }).then(function (response) {
        console.log(response);
        let i = Math.floor(Math.random() * response.data.length);
        const searchData = {
          name: response.data[i].name,
          location: state || response.data[i].addresses[0].city + ", " + state,
          description: response.data[i].description
        };
        return resolve(searchData);
      });
    });
  }

  async function render() {
    const data = await campSearch();
    console.log(data);
    $.ajax({
      url: "/api/campsites",
      method: "POST",
      data: data
    }).then(() => {
      location.reload();
    });
  }
  $(".searchBtn").on("click", function (event) {
    event.preventDefault();
    render();
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