root = document.documentElement;

function changeBG() {
  let randomHex = Math.floor(Math.random()*16777215).toString(16);
  root.style.setProperty('--default-bg-color', `#${randomHex}`);
}