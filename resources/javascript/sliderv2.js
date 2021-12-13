var slider = document.getElementById("myRange")
var output = document.getElementById("der")
var img = document.getElementById("bilde")
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    img.style.opacity = this.value/100
}