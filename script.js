let currentImage = 1;
const totalImage = 9;

function increaseImg() {
  currentImage = currentImage < totalImage ? currentImage + 1 : 1;
  updateSliderImg();
}
function decreaseImg() {
  if (currentImage > 1) {
    currentImage--;
    updateSliderImg();
  } else {
    currentImage = totalImage;
    updateSliderImg();
  }
}

function updateSliderImg() {
  const newImage = `./img-${currentImage}.jpg`;
  const imageElement = document.getElementById("slider");

  const imgTest = new Image();
  imgTest.onload = function () {
    imageElement.src = newImage;
  };

  imgTest.src = newImage;
}
setInterval(increaseImg, 10000);

let loginPage = document.querySelector(".login-page");

function Pop() {
  loginPage.classList.toggle("show");
}

const hamShow = document.getElementById("ham-show");

function openMenu() {
  hamShow.classList.toggle("show3");
  if (hamShow.classList.contains("show3")) {
    hamShow.classList.remove("hide");
  } else {
    hamShow.classList.add("hide");
  }
}
