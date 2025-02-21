var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");
var links = document.querySelectorAll(".sidenav a");  // Sélectionne tous les liens dans le menu burger

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

// Ouvre le menu burger
function openNav() {
    sidenav.classList.add("active");
}

// Ferme le menu burger
function closeNav() {
    sidenav.classList.remove("active");
}

// Ferme le menu lorsqu'un lien est cliqué
links.forEach(function(link) {
    link.addEventListener("click", closeNav);
});

