document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const dropdowns = document.querySelectorAll('.dropdown');

    menuToggle.addEventListener('click', function () {
        dropdowns.forEach(function (dropdown) {
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        });
    });
});

// ------------------------------------------------------------------------------------------------------------

// function fillProgressBar() {
//     fillProgressBarByPercentage('.progress-bar-html', 80);
//     fillProgressBarByPercentage('.progress-bar-css', 60);
//     fillProgressBarByPercentage('.progress-bar-js', 40);
// }

// function fillProgressBarByPercentage(className, percentage) {
//     const progressBar = document.querySelector(className);
//     const fillWidth = (percentage / 100) * parseFloat(getComputedStyle(progressBar.parentNode).width);
//     progressBar.style.width = fillWidth + 'px';
// }

// ------------------------------------------------------------------------------------------------------------

const textElement = document.querySelector(".intro-txt");
const text = textElement.textContent;

let index = 0;
let speed = 10;

function writeText() {
    document.querySelector(".intro-txt").innerHTML = text.slice(0, index);
      index++;
      if(index <= text.length) {
        setTimeout(writeText, speed);
        }
    }
writeText();

// --------------------------------------------------------------------------------------------------------------

function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    // var pnum = document.getElementsById("num").value;
    var message = document.getElementById("message").value;

    alert("Form submitted!\nName: " + name + "\nEmail: " + email + "\nMessage: " + message);  // "\nPhone: " + pnum +

    document.getElementById("contactForm").reset();
}


// Move an Image

// var movingImage = document.getElementById('ppic');
//     var topPosition = 0;
//     var leftPosition = 0;
//     var imgspeed = 5;
//     function moveImage() {
//         topPosition += imgspeed;
//         movingImage.style.top = topPosition + 'px';
//         movingImage.style.left = leftPosition + 'px';
//         requestAnimationFrame(moveImage);
//     }
//     moveImage();