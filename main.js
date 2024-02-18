var images = ['images.jpg', 'download.jpg'];
var currentImageIndex = 0;

function showNextImage() {
  var mainImage = document.getElementById("mainImage");
  currentImageIndex = (currentImageIndex + 1) % images.length;
  mainImage.src = images[currentImageIndex];
}