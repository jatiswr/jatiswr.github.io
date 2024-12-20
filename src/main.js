const scroll = new SmoothScroll('.nav-link[href*="#"]', {
  speed: 800,
});

// const navItems = document.querySelectorAll(".nav-item");

// navItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     //Remove 'active' styles from all items
//     navItems.forEach((nav) => nav.classList.remove("text-cyan-400"));
//     navItems.forEach((nav) => nav.classList.add("text-slate-100"));

//     //Add 'active' styles to the clicked item
//     item.classList.remove("text-slate-100");
//     item.classList.add("text-cyan-400");
//   });
// });
