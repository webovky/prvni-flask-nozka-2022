function hide() {
    this.parentElement.style.display = "none";
}

var tlacitka = document.getElementsByClassName('hide');
for (var i=0; i<tlacitka.length; i++) {
    tlacitka[i].onclick = hide;
}


document.getElementById('abc').onclick = hide