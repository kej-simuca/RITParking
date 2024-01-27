const ritParkingImage = document.getElementById('ritParkingImage');

let isEnlarged = false;

function enlarge() {
    ritParkingImage.classList.add('ritParkingImageH');
    console.log('hovered');
}

function shrink() {
    ritParkingImage.className = 'ritParkingImageSh';
}

ritParkingImage.addEventListener('click', () => {
    if (isEnlarged) {
        shrink();
        isEnlarged = false;
    } else {
        enlarge();
        isEnlarged = true;
    }
});


const buttonPopup = document.getElementById('popup');
const p = document.querySelectorAll('.popupH');
const close = document.querySelectorAll(".close");
const overlay = document.querySelector(".overlay");

let isCliked = false;

function showPopup() {
    p.className = "popSh";
    console.log('shown');
}

function hidePopup() {
    p.className = "popupH";
    console.log("hidden");
}


buttonPopup.addEventListener('click', () => {
    overlay.style.display = "block";
    let percent = 15;
    p.forEach((element) => {

        element.className = 'popSh';
        element.style.left = percent + "%";

        percent += 33;
        console.log(element)
    }
    )

});
close.forEach((button) => {
    button.addEventListener('click', () => {
        overlay.style.display = "none";
        p.forEach((element) => {
            element.className = "popupH";
        })
    });


})
