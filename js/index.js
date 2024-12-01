
const text = "Welcome to e-Teacher Tutor site";
let index = 0;
let isDeleting = false;

function typeText() {
    const titleElement = document.getElementById("heading");
    if (isDeleting) {
        titleElement.innerHTML = text.substring(0, index - 1);
        index--;
        if (index <= 0) {
            isDeleting = false; 
            setTimeout(typeText, 500); 
        } else {
            setTimeout(typeText, 100); 
        }
    } else {
        titleElement.innerHTML = text.substring(0, index + 1);
        index++;
        if (index === text.length) {
            isDeleting = true; 
            setTimeout(typeText, 500); 
        } else {
            setTimeout(typeText, 100); 
        }
    }
}

window.onload = typeText;
