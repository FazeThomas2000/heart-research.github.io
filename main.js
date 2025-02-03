document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");

    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container h1", scrollRevealOption);

ScrollReveal().reveal(".header__container h4", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
    ...scrollRevealOption,
    delay: 1000,
});

// doctor container
ScrollReveal().reveal(".doctor__container .section__header", scrollRevealOption);
ScrollReveal().reveal(".doctor__container .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".doctor__container .doctor__flex", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".doctor__container .btn", {
    ...scrollRevealOption,
    delay: 1500,
});

// team container
ScrollReveal().reveal(".team__card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".team__card__content", {
    ...scrollRevealOption,
    interval: 500,
    delay: 200,
});

// research container
ScrollReveal().reveal(".research__card", {
    duration: 1000,
    interval: 400,
  });

// funding container
ScrollReveal().reveal(".funding__card", {
    ...scrollRevealOption,
    interval: 400,
});