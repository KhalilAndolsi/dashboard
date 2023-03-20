//before localstorage
let links = document.querySelectorAll(".link");
let parts = document.querySelectorAll(".part");

links.forEach(link => {
  if (link.getAttribute("data-page") === localStorage.getItem("state")) {
    link.classList.add("active")
    parts.forEach(part => part.classList.remove("show"))
    document.getElementById(link.getAttribute("data-page")).classList.add("show")
    if (link.getAttribute("data-page") === "Users") {
      document.title = `Manage ${link.getAttribute("data-page")}`
    } else {
      document.title = link.getAttribute("data-page")
    }
  } else {
    link.classList.remove("active")
  }
})

// on loade


function dir() {
  let index = window.location.href.indexOf("#");
  if (index !== -1) {
    let stateNow = window.location.href.slice(index + 1);
    links.forEach(link => {
      if (link.getAttribute("data-page") === stateNow) {
        link.classList.add("active")
        parts.forEach(part => part.classList.remove("show"))
        document.getElementById(link.getAttribute("data-page")).classList.add("show")
        if (link.getAttribute("data-page") === "Users") {
          document.title = `Manage ${link.getAttribute("data-page")}`
        } else {
          document.title = link.getAttribute("data-page")
        }
      } else {
        link.classList.remove("active")
      }
    })
  }
};

dir() 

// on cahnge

window.addEventListener("hashchange", dir)

// ==========================================================
//after localstorage

links.forEach(link => {
  link.onclick = function () {
    links.forEach(l => l.classList.remove("active"))
    this.classList.add("active")
    parts.forEach(part => part.classList.remove("show"))
    document.getElementById(this.getAttribute("data-page")).classList.add("show")
    if (this.getAttribute("data-page") === "Users") {
      document.title = `Manage ${this.getAttribute("data-page")}`
    } else {
      document.title = this.getAttribute("data-page")
    }
    document.querySelector(".sidebar").classList.toggle("nohide");
    localStorage.setItem("state", this.getAttribute("data-page"));
    let thisindex = window.location.href.indexOf("#");
    if (thisindex !== -1) {
      window.location.href = `${window.location.href.slice(0, thisindex)}#${this.getAttribute("data-page")}`
    } else {
      window.location.href = `${window.location.href}#${this.getAttribute("data-page")}`;
    }
  }
})
// ==========================================================
// sidebar
let btn = document.querySelector(".btnhide");

btn.onclick = function () {
  document.querySelector(".sidebar").classList.toggle("nohide")
};

