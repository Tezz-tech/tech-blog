$(document).ready(function () {
  $.get("https://dev.to/api/articles", function (data, err) {
    if (data) {
      for (let i = 0; i < data.length; i++) {
        let y = data[i];
        let x = posts(y);
        $("#contents").append(x);
      }
    }
  });
  function posts(data) {
    let date = new Date();
    let year = date.getFullYear();
    if (!data.cover_image) {
      return "";
    }
    return `
    <a href="${data.canonical_url}">
    <div class="mainContent">
      <p>${data.type_of}</p>
      <h4>${data.title}</h4>
      <img src="${data.cover_image}" alt="" />
      <h5>${data.description}</h5>
      <p>Date Published ${data.readable_publish_date} ${year}</p>
    </div>
    </a>`;
  }
});

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
};

  
let now = new Date();
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let formattedDate = now.toLocaleDateString('en-US', options);
let formattedTime = now.toLocaleTimeString('en-US');

$("#time").append(`${formattedDate} ${formattedTime}`);


