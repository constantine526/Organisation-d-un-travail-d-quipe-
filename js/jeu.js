// Script pour le carrousel de témoignages
document.addEventListener("DOMContentLoaded", function () {
  const testimonialItems = document.querySelectorAll(".testimonial-item");
  const dots = document.querySelectorAll(".dot");
  let currentSlide = 0;

  // Fonction pour afficher un témoignage spécifique
  window.currentSlide = function (n) {
    showSlide(n);
  };

  function showSlide(n) {
    // Cacher tous les témoignages
    testimonialItems.forEach((item) => {
      item.classList.remove("active");
    });

    // Désactiver tous les points
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    // Afficher le témoignage sélectionné
    testimonialItems[n].classList.add("active");
    dots[n].classList.add("active");
    currentSlide = n;
  }

  // Fonction pour passer au témoignage suivant
  function nextSlide() {
    currentSlide = (currentSlide + 1) % testimonialItems.length;
    showSlide(currentSlide);
  }

  // Rotation automatique des témoignages toutes les 5 secondes
  setInterval(nextSlide, 5000);

  // Animation des éléments au défilement
  const animatedElements = document.querySelectorAll(
    ".step-item, .feature-card"
  );

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
      rect.bottom >= 0
    );
  }

  function handleScroll() {
    animatedElements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add("animate");
      }
    });
  }

  // Ajouter la classe CSS pour l'animation
  animatedElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  // Observer le défilement
  window.addEventListener("scroll", function () {
    handleScroll();
  });

  // Déclencher l'animation au chargement initial
  handleScroll();
});
