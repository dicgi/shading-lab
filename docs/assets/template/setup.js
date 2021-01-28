// ! Prototypes
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

// ! Global variables
window.YEAR_FOOTER = new Date().getFullYear();
window.PAGE_LINK = "diegoinacio.github.io";

// * Get meta title
window.META_TITLE = document.querySelector(`meta[name="title"]`).content;
window.PAGE_TITLE =
  window.META_TITLE !== "index" ? `${window.META_TITLE.toUpperCase()} | ` : "";
window.PAGE_TITLE += "Shading Lab";

// ! Dynamic settings
// * Set title
document.querySelector("title").innerText = window.PAGE_TITLE;

// * Set background attributes
document.querySelector("body").setAttribute("background", window.META_TITLE);
document.querySelector("#banner").setAttribute("background", window.META_TITLE);
document.querySelector("#footer").setAttribute("background", window.META_TITLE);
