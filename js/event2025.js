// Animation des éléments de la galerie au défilement
document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");

  // Fonction pour vérifier si un élément est dans le viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
      rect.bottom >= 0
    );
  }

  // Fonction pour animer les éléments visibles
  function handleScroll() {
    fadeElements.forEach((element) => {
      if (isElementInViewport(element) && !element.classList.contains("show")) {
        // Ajouter un délai aléatoire pour un effet cascade
        setTimeout(() => {
          element.classList.add("show");
        }, Math.random() * 300);
      }
    });
  }

  // Déclencher l'animation au chargement et au défilement
  handleScroll();
  window.addEventListener("scroll", handleScroll);

  // Animation des images au survol pour un effet plus fluide
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.querySelector(".gallery-caption").style.transform = "translateY(0)";
    });

    item.addEventListener("mouseleave", function () {
      this.querySelector(".gallery-caption").style.transform =
        "translateY(100%)";
    });
  });
});
