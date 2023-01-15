var SON1 = new Audio();
SON1.src = "son/son1.mp3"

var SON2 = new Audio();
SON2.src = "son/son2.mp3"


var images = [
    "assetsdanse/image1.gif",
    "assetsdanse/image2.gif",
    "assetsdanse/image3.gif",
    "assetsdanse/image4.gif",
    "assetsdanse/image5.gif",
    "assetsdanse/image6.gif",
    "assetsdanse/image7.gif",
    "assetsdanse/image8.gif",
    "assetsdanse/image.gif",

];
var intervalId;
var createdImages = [];

document.getElementsByClassName("btn")[2].addEventListener("click", function() {
    if (!intervalId) {
        for (var i = 0; i < 5; i++) {
            var imageIndex = Math.floor(Math.random() * images.length);
            var image = new Image();
            image.src = images[imageIndex];
            image.style.position = "absolute";
            image.style.left = Math.random() * (window.innerWidth - image.width) + "px";
            image.style.top = Math.random() * (window.innerHeight - image.height) + "px";
            document.body.appendChild(image);
            createdImages.push(image);
        }
        intervalId = setInterval(moveImages, 500);
    } else {
        clearInterval(intervalId);
        intervalId = null;
        for (var j = 0; j < createdImages.length; j++) {
            document.body.removeChild(createdImages[j]);
        }
        createdImages = [];
    }
});

function moveImages() {
    for (var i = 0; i < createdImages.length; i++) {
        var newLeft = parseInt(createdImages[i].style.left) + (Math.random() * 10 - 5);
        var newTop = parseInt(createdImages[i].style.top) + (Math.random() * 10 - 5);
        if (newLeft > 0 && newLeft + createdImages[i].width < window.innerWidth) {
            createdImages[i].style.left = newLeft + "px";
        }
        if (newTop > 0 && newTop + createdImages[i].height < window.innerHeight) {
            createdImages[i].style.top = newTop + "px";
        }
    }
}



var colors = ["red", "green", "blue", "purple", "orange"];
var currentColor = 0;
var intervalId;

var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    if (btns[i].innerHTML === "ÉPILEPTIQUE") {
        btns[i].addEventListener("click", function() {
            if (!intervalId) {
                intervalId = setInterval(changeColor, 10);
            } else {
                clearInterval(intervalId);
                intervalId = null;
                document.body.style.backgroundColor = "white";
            }
        });
    }
}

function changeColor() {
  document.body.style.backgroundColor = colors[currentColor];
  currentColor = (currentColor + 1) % colors.length;
}

const btn = document.getElementById("draggable-btn");
let isDown = false;
let startX;
let startY;

btn.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - btn.offsetLeft;
    startY = e.pageY - btn.offsetTop;
});

btn.addEventListener("mouseup", () => {
    isDown = false;
});

btn.addEventListener("mousemove", (e) => {
    if (isDown) {
        const x = e.pageX - startX;
        const y = e.pageY - startY;
        btn.style.left = `${x}px`;
        btn.style.top = `${y}px`;
    }
});


const draggableBtn = document.getElementById("draggable-btn");

draggableBtn.addEventListener("mousedown", (event) => {
  event.preventDefault();
  let initialX = event.clientX - draggableBtn.offsetLeft;
  let initialY = event.clientY - draggableBtn.offsetTop;

  function onMouseMove(event) {
    let finalX = event.clientX - initialX;
    let finalY = event.clientY - initialY;
    draggableBtn.style.left = finalX + "px";
    draggableBtn.style.top = finalY + "px";
  }

  document.addEventListener("mousemove", onMouseMove);

  draggableBtn.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", onMouseMove);
  });
});