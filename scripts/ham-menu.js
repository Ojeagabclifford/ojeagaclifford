const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu')


hamMenu.addEventListener('click',()=> {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    
})


function myFunction() {
    offScreenMenu.classList.toggle('clifford')
  }

//   document.addEventListener("DOMContentLoaded", function () {
//     const lazyImages = document.querySelectorAll("img[loading='lazy']");

//     lazyImages.forEach(img => {
//         img.addEventListener("load", () => {
//             img.style.opacity = 1;
//             img.style.transform = "scale(1)";
//         });
//     });
// });



// document.addEventListener("DOMContentLoaded", function () {
//     const lazyImages = document.querySelectorAll("img[loading='lazy']");

//     lazyImages.forEach(img => {
//         img.addEventListener("load", () => {
//             img.style.opacity = 1;
//             img.style.transform = "scale(1)";
//         });
//     });
// });


// document.addEventListener("DOMContentLoaded", function () {
//     const images = document.querySelectorAll(".lazy-image");

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("visible");
//             }
//         });
//     }, { threshold: 0.1 });

//     images.forEach(img => observer.observe(img));
// });

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".lazy-image");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible"); // Re-trigger animation when item leaves view
            }
        });
    }, { threshold: 0.1 });

    items.forEach(item => observer.observe(item));
});