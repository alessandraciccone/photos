const pex = function () {
  fetch("https://api.pexels.com/v1/search?query=mare", {
    method: "GET",
    headers: {
      Authorization: "hBIKWK7UAXorLUCGF2XBCEfXi2GKYoYQ8yAe0hpJUUfP6cIU7txLrbKj",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Errore:", error));
};

pex();

const API_KEY = "hBIKWK7UAXorLUCGF2XBCEfXi2GKYoYQ8yAe0hpJUUfP6cIU7txLrbKj";

document.getElementById("loadBtn").addEventListener("click", function () {
  fetch("https://api.pexels.com/v1/search?query=hamsters&per_page=9", {
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const allImages = document.querySelectorAll(".card img");
      data.photos.forEach((photo, index) => {
        if (allImages[index]) {
          allImages[index].src = photo.src.medium;
          allImages[index].alt = photo.photographer;
        }
      });
    })
    .catch((error) => {
      console.error("Errore:", error);
    });
});

document.querySelector(".btn-secondary").addEventListener("click", function () {
  fetch("https://api.pexels.com/v1/search?query=tigers&per_page=9", {
    headers: { Authorization: API_KEY },
  })
    .then((response) => response.json())
    .then((data) => {
      const allImages = document.querySelectorAll(".card img");
      data.photos.forEach((photo, index) => {
        if (allImages[index]) {
          allImages[index].src = photo.src.medium;
          allImages[index].alt = photo.photographer;
        }
      });
    })
    .catch((error) => console.error("Errore:", error));
});

document.querySelectorAll(".hide-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const card = this.closest(".col-md-4"); // 👈 Nasconde l'intera colonna
    if (card) {
      card.style.display = "none";
    }
  });
});
