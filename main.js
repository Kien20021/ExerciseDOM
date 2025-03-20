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
