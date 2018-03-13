// function changeImage() {
//     var image = document.getElementById('myImage');
//     if (image.src.match("night")) {
//         image.src = "img/day.jpg";
//     } else {
//         image.src = "img/night.jpg";
//         // document.body.style.backgroundImage = "url('img/night.jpg')";
//     }
// }
function changeImage() {
    var dayOrNight = document.getElementsByClassName("bg")[0].getAttribute("value");
    if (dayOrNight === "day") {
        document.getElementsByClassName("bg")[0].setAttribute("value", "night");
        document.getElementById('img_switch').style.backgroundImage = 'url(img/night.jpg)';
    }
    else {
        document.getElementsByClassName("bg")[0].setAttribute("value", "day");
        document.getElementById('img_switch').style.backgroundImage = 'url(img/day.jpg)';
    }
}