const navbar = document.querySelector(".navbar");
const homebg = document.querySelector(".home_background");
const menu = document.querySelector(".navbar_menu");
const links = document.querySelector(".navbar_links");
const sections = document.querySelectorAll("section");
const config = {
  rootMargin: "0px",
  threshold: [0.6, 0.9],
};

function ing(){
  var ini = document.getElementById("inicio");
  var sobre = document.getElementById("sobre");
  var cono = document.getElementById("conocimientos");
  var proy = document.getElementById("proyectos");
  var cont = document.getElementById("contacto");
  var lang = document.getElementById("lang");
  var text1 = document.getElementById("home_title--primary");
  var text2 = document.getElementById("home_title");
  var text3 = document.getElementById("home_title--secondary");
  var soy = document.getElementById("quiensoy");
  var nom = document.getElementById("nombre");
  var dev = document.getElementById("about-secondary");
  var soy1 = document.getElementById("soy");
  var cv = document.getElementById("cv");
  var skill = document.getElementById("cono");
  var port = document.getElementById("section_title");
  var port1 = document.getElementById("section_subtitle");
  var contact = document.getElementById("contacto1");
  var bike = document.getElementById("bike");
  var app = document.getElementById("app");
  var draw = document.getElementById("draw");
  var mail = document.getElementById("mail1");
  var git = document.getElementById("github");
  var tw  = document.getElementById("tw");
  var linkedin = document.getElementById("link");

  
    ini.innerHTML = "Home";
    sobre.innerHTML = "About";
    cono.innerHTML = "Skill";
    proy.innerHTML = "Portfolio";
    cont.innerHTML = "Contact";
    text1.innerHTML = "Hello World!";
    text2.innerHTML = "I´m Fernando Heredia";
    text3.innerHTML = "Developer";
    soy.innerHTML = "Who am I?";
    nom.innerHTML = "I´m Fernando Heredia,";
    dev.innerHTML = "Developer...";
    soy1.innerHTML = "I am a full stack python developer, and I am constantly learning new development technologies. I love collaborating and working as a team, where i can apply my knowledge and skills to continue improving and growing professionally ";
    cv.innerHTML = "Dowload CV";
    cv.href = "./assets/CV_FernandoHeredia_ing.pdf";
    skill.innerHTML = "My Skills";
    port.innerHTML = "My Portfolio";
    port1.innerHTML = "here you can see some of my projects!";
    contact.innerHTML = "Contact me!";
    bike.innerHTML = "Website created to complete the frontend stage of the course: HTML, JS, CSS";
    app.innerHTML = "App for android to know schedules of the groups to the faculty.";
    draw.innerHTML = "Website Template made for a friend: JS, CSS, HTML";
    mail.innerHTML = "Mail Me";
    git.innerHTML = "Follow Me";
    tw.innerHTML = "Follow Me";
    linkedin.innerHTML = "Contact Me";

}

function arg(){
  var ini = document.getElementById("inicio");
  var sobre = document.getElementById("sobre");
  var cono = document.getElementById("conocimientos");
  var proy = document.getElementById("proyectos");
  var cont = document.getElementById("contacto");
  var lang = document.getElementById("lang");
  var text1 = document.getElementById("home_title--primary");
  var text2 = document.getElementById("home_title");
  var text3 = document.getElementById("home_title--secondary");
  var soy = document.getElementById("quiensoy");
  var nom = document.getElementById("nombre");
  var dev = document.getElementById("about-secondary");
  var soy1 = document.getElementById("soy");
  var cv = document.getElementById("cv");
  var skill = document.getElementById("cono");
  var port = document.getElementById("section_title");
  var port1 = document.getElementById("section_subtitle");
  var contact = document.getElementById("contacto1");
  var bike = document.getElementById("bike");
  var app = document.getElementById("app");
  var draw = document.getElementById("draw");
  var mail = document.getElementById("mail1");
  var git = document.getElementById("github");
  var tw  = document.getElementById("tw");
  var linkedin = document.getElementById("link");


    
    ini.innerHTML = "Inicio";
    sobre.innerHTML = "Sobre Mi";
    cono.innerHTML = "Mis Habilidades";
    proy.innerHTML = "Mis Proyectos";
    cont.innerHTML = "Contacto";
    text1.innerHTML = "Hola!";
    text2.innerHTML = "Soy Fernando Heredia";
    text3.innerHTML = "Desarrollador";
    soy.innerHTML = "Quien Soy?";
    nom.innerHTML = "Soy Fernando Heredia,";
    dev.innerHTML = "Desarrolador...";
    soy1.innerHTML = "Soy desarrolador fullstack python, orientado al desarrollo de sitios web, y me encuentro en constante aprendizaje de nuevas tecnologias de desarrollo.Me encanta colaborar y trabajar en equipo, donde puedo aplicar mis conocimientos y habilidades para seguir mejorando y creciendo profesionalmente.";
    cv.innerHTML = "Descargar CV";
    cv.href = "./assets/CV_FernandoHeredia.pdf";
    skill.innerHTML = "Mis Habilidades";
    port.innerHTML = "Mis Proyectos";
    port1.innerHTML = "Aqui puedes ver algunos de mis proyectos!";
    contact.innerHTML = "Contacto";
    bike.innerHTML = "Web realizada para completar etapa frontend de curso: HTML, JS, CSS";
    app.innerHTML = "App para android para conocer horarios de los colectivos hasta la facultad.";
    draw.innerHTML = "Template de Pagina realizada para un amigo: JS, CSS, HTML";
    mail.innerHTML = "Escribeme";
    git.innerHTML = "Sigueme";
    tw.innerHTML = "Sigueme";
    linkedin.innerHTML = "Contactame";
  
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
