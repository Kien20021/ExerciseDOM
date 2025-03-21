function handleChangeColor() {
  const textRed = document.getElementById("textRed");
  console.log([textRed], "sssssssssss");

  textRed.style.color = "red";
  const textBlue = document.getElementById("textBlue");
  textBlue.style.color = "blue";
  const textGreen = document.getElementById("textGreen");
  textGreen.style.color = "green";
}

function handlChangeBg(color) {
  const body = document.querySelector("body");
  body.style.backgroundColor = color;
}
document.getElementById("fontSizeInput").addEventListener("input", function () {
  const newSize = this.value;
  changeFontSize(newSize);
});
function changeFontSize(size) {
  const paragrap = document.querySelectorAll("p");
  paragrap.forEach((paragrap) => {
    paragrap.style.fontSize = size + "px";
  });
}
function copyContent() {
  const para1 = document.getElementById("textRed");
  const para2 = document.getElementById("textBlue");

  para1.innerHTML = para2.innerHTML;
}
