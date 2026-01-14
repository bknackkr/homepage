// Get the button:
let topButton = document.getElementById("topBtn");
// Const for easy adjustment of the scroll margin
const SCROLL_VALUE = 100;
// Run the function on window load to make sure button is hidden
window.addEventListener('load', scrollFunction);
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > SCROLL_VALUE || document.documentElement.scrollTop > SCROLL_VALUE) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}