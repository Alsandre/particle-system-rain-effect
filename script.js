const myImage = new Image();

myImage.src =
  "data:image/jpeg;base64,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";

myImage.addEventListener("load", function handleImageLoad() {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");

  canvas.width = 206;
  canvas.height = 206;

  ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
  const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);

  let particlesArray = [];
  const numberOfParticles = 3000;

  let mappedImage = [];
  for (let y = 0; y < canvas.height; y++) {
    let row = [];
    for (let x = 0; x < canvas.width; x++) {
      const red = pixels.data[y * 4 * pixels.width + x * 4];
      const blue = pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
      const green = pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
      const brightness = calculateRelativeBrightness(red, green, blue);
      const cell = [brightness];
      row.push(cell);
    }
    mappedImage.push(row);
  }
  function calculateRelativeBrightness(red, green, blue) {
    return Math.sqrt(
      red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114
    )/100;
  }

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = 0;
      this.speed = 0;
      this.velocity = Math.random() * 0.5;
      this.size = Math.random() * 0.7 ;
      this.position1 = Math.floor(this.y);
      this.position2 = Math.floor(this.x);
    }

    update() {
      this.position1 = Math.floor(this.y);
      this.position2 = Math.floor(this.x);
      this.speed = mappedImage[this.position1][this.position2][0];
      let movement = 2.5 - this.speed + this.velocity;
      this.y += movement;
      if (this.y >= canvas.height) {
        this.y = 0;
        this.x = Math.random() * canvas.width;
      }
    }
    draw() {
      ctx.beginPath();
      ctx.fillStyle = "white";
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  function init() {
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }
  }

  init();
  function animate() {
    // ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
      ctx.globalAlpha = particlesArray[i].speed*0.5
      particlesArray[i].draw();
    }
    requestAnimationFrame(animate);
  }
  animate();
});
