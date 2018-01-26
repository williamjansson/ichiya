var modal = document.getElementById('modal1');

var img = document.getElementById('myImg1');
var modalImg = document.getElementById('img1');
var capText = document.getElementById('caption');

img.onclick = function(){
    modal.style.display="block";
    modalImg.src = this.src;
    capText.innerHTML = this.alt;
}

modal1.onclick = function() {
    modal1.style.display = "none";
}
