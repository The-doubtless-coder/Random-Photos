const buttonEl = document.querySelector(".btn");
const imgContainer = document.querySelector(".image-container");

console.log(buttonEl);
console.log(imgContainer);

buttonEl.addEventListener("click", (event) => {
  for (let index = 0; index < 10; index++) {
    addImages();
  }
});

const addImages = function () {
  const newImgEl = document.createElement("img");
  newImgEl.src = `https://picsum.photos/300/300?random=${Math.floor(
    Math.random() * 2000
  )}`;
  imgContainer.appendChild(newImgEl);
};
