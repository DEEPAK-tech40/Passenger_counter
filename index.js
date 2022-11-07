let x = document.getElementById("count");
let y = document.getElementById("ent");
let a = 0;
function increment() {
  x.innerText = ++a;
}
function save() {
  let ds = a + " - ";
  y.textContent += ds;
  a = 0;
  x.textContent = a;
}
