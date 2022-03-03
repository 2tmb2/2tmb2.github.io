const img = document.getElementById("img")
img.src = `images/image_${Math.floor(Math.random()*6)}.JPG`
if (window.screen.width/img.width > window.screen.height/img.height) {
    img.classList="wide"
}
else {
    img.classList="tall"
}
