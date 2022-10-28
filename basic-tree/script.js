window.addEventListener("DOMContentLoaded", () => {
  const nestedItems = document.querySelectorAll("li.nested > a");
  nestedItems.forEach((element) => {
    element.addEventListener("click", (event) => {
      const nestedLi = element.closest("li.nested");

      nestedLi.querySelector("ul").classList.toggle("active");

      event.target.classList.toggle("rotate");
    });
  });
});
