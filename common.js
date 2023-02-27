const storageKey = "blur";
const activeClass = "blur-active";
let blur = localStorage.getItem(storageKey) ?? "on";

function updateBlur() {
  const overlay = document.getElementById("BlurOverlay");
  if (blur === "on") {
    overlay.classList.add(activeClass);
  } else {
    overlay.classList.remove(activeClass);
  }
}

function toggleBlur() {
  blur = blur === "on" ? "off" : "on";
  localStorage.setItem(storageKey, blur);
  updateBlur();
}

updateBlur();
