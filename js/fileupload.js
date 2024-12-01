
const fileInput = document.getElementById('fileInput');
const modalFileInput = document.getElementById('modalFileInput');
const profilePicNav = document.getElementById('profilePicNav');
const largeProfilePic = document.getElementById('largeProfilePic');
const profilePicModal = new bootstrap.Modal(document.getElementById('profilePicModal'));
const uploadPrompt = document.getElementById('uploadPrompt');


profilePicNav.addEventListener('click', () => {
    if (largeProfilePic.src === profilePicNav.src) {
        largeProfilePic.style.display = 'block'; 
        uploadPrompt.style.display = 'none'; 
    } else {
        largeProfilePic.style.display = 'none'; 
        uploadPrompt.style.display = 'block';
    }
    profilePicModal.show();
});

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            profilePicNav.src = e.target.result; 
            largeProfilePic.src = e.target.result;
            uploadPrompt.style.display = 'none'; 
            largeProfilePic.style.display = 'block'; 
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('editProfilePicButton').addEventListener('click', () => {
    modalFileInput.click();
});

modalFileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            profilePicNav.src = e.target.result; 
            largeProfilePic.src = e.target.result;
            uploadPrompt.style.display = 'none'; 
            largeProfilePic.style.display = 'block'; 
        };
        reader.readAsDataURL(file);
    }
});
