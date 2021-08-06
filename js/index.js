const navbar = document.querySelector(".navbar");
const homebg = document.querySelector(".home_background");
const menu = document.querySelector(".navbar_menu");
const links = document.querySelector(".navbar_links");
const sections = document.querySelectorAll("section");
const config = {
  rootMargin: "0px",
  threshold: [0.6, 0.9],
};

function change(){
  alert("Hello")
  var etiqueta = document.getElementsById("language")[0];
  var texto = etiqueta.childNodes[0]; // El primer nodo 'hijo' de la etiqueta p
  texto.nodeValue = 'VALOR NUEVO';
}


function mail(){
  var mail = document.getElementById("mail")
  var anchoVentana = window.innerWidth
    
  
  if (anchoVentana > 640 ) {
    mail.href = "contact.html"
  }

}
mail();

function handleLlinks() {
  if (window.innerWidth <= 991) {
    links.classList.toggle("visible");
  }
}

menu.addEventListener("click", handleLlinks);
links.addEventListener("click", handleLlinks);

window.addEventListener("scroll", function () {
  window.scrollY > 100 && (navbar.style.background = `rgba(0,0,0,0.9)`);
  window.scrollY < 100 && (navbar.style.background = `transparent`);
});

let observer = new IntersectionObserver(function (entries, self) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      intersectionHandler(entry);
    }
  });
}, config);

sections.forEach((section) => {
  observer.observe(section);
});

function intersectionHandler(entry) {
  const id = entry.target.id;
  const currentlyActive = document.querySelector(".navbar_links  .active");
  const shouldBeActive = document.querySelector(
    ".navbar__links [data-ref=" + id + "]"
  );

  if (currentlyActive) {
    currentlyActive.classList.remove("active");
  }
  if (shouldBeActive) {
    shouldBeActive.classList.add("active");
  }
}



ScrollReveal().reveal(".navbar", { delay: 250 });
ScrollReveal().reveal(".home_profile", { delay: 350 });
ScrollReveal().reveal(".home_title--primary", { delay: 350 });
ScrollReveal().reveal(".home_title", { delay: 450 });
ScrollReveal().reveal(".home_title--secondary", { delay: 550 });
ScrollReveal().reveal(".section_title", { delay: 250 });
ScrollReveal().reveal(".section_subtitle", { delay: 350 });
ScrollReveal().reveal(".about_description", { delay: 350 });
ScrollReveal().reveal(".about_summary", { delay: 450 });
ScrollReveal().reveal(".button--cta", { delay: 550 });
ScrollReveal().reveal(".skill_title", { delay: 450 });
ScrollReveal().reveal(".skill_item", { delay: 450 });
ScrollReveal().reveal(".services_item", { delay: 450 });
ScrollReveal().reveal(".portfolio_item", { delay: 450 });
ScrollReveal().reveal(".contact_item", { delay: 450 });
ScrollReveal().reveal(".footer", { delay: 450 });
