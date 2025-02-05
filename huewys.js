let voirImage = document.querySelectorAll("img");
let modalContent = document.querySelector(".modal-content");
let closeModal = document.querySelector(".close");
let modal = document.querySelector(".modal");

voirImage.forEach(function (image) {
    image.addEventListener("click", function () {
        console.log("ça fonctionne quand tu cliques !")
        let newImage = document.createElement("img");
        newImage.src = image.src;
        newImage.style.maxWidth ="90%"
        let figure = document.createElement("figure");

        figure.appendChild(newImage);

        let authorName = image.getAttribute("alt") || "Auteur inconnu";
        let caption = document.createElement("figcaption");
        caption.textContent = authorName;

        figure.appendChild(caption);

        modalContent.innerHTML = "";
        modalContent.appendChild(figure);

        modal.style.display = "block";
    });
});

closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});


let comment = document.querySelector(".comments-list");
let button = document.querySelector(".button");
let pseudo = document.querySelector("input[type=text]");
let commentaire = document.querySelector("textarea");

button.addEventListener("click", function () {
    comment.innerHTML += '<div class="comment"><p><strong>' + pseudo.value + '</strong> : ' + commentaire.value + '</p></div>';
});