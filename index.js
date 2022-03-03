const img = document.getElementById("img")
img.src = `images/image${((Math.floor(Math.random()*26))+1)}.JPG`
if (window.screen.width/img.width > window.screen.height/img.height) {
    img.classList="wide"
}
else {
    img.classList="tall"
}
