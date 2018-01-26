var acc = document.getElementsByClassName('accordion');
var i;

for(i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle('active');

        var hidden = this.nextElementSibling;
        if(hidden.style.display === "block"){
            hidden.style.display = "none";
        } else {
            hidden.style.display = "block";
        }
    }
}
