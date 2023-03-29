const controls = document.getElementById("controls");
const cssText = document.querySelector(".css");
const btn = document.querySelector(".btn");

controls.addEventListener("change", handleChange);

const handleStyles = {
  element: btn,
  text(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + "px";
  },
  width(value) {
    this.element.style.width = value + "px";
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + "rem";
  },
};

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyles[name](value);
  saveValues(name, value);
  showCss();
}

function saveValues(name, value) {
  localStorage[name] = value;
}

function setValues() {
  const propreties = Object.keys(localStorage);
  propreties.forEach((propretie) => {
    handleStyles[propretie](localStorage[propretie]);
    controls.elements[propretie].value = localStorage[propretie];
  });
  showCss();
}

setValues();

function showCss() {
  cssText.innerHTML =
    "<span>" + btn.style.cssText.split("; ").join("; </span><span>");
}
