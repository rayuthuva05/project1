// script.js
document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    const fileInput = document.getElementById('fileInput');
    formData.append('file', fileInput.files[0]);

    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();
        if (result.success) {
            alert('File uploaded successfully!');
            loadFiles(); // Reload the file list
        } else {
            alert('Error uploading file.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

// Function to load existing files
async function loadFiles() {
    const response = await fetch('/files');
    const files = await response.json();
    const fileList = document.getElementById('fileList');
    fileList.innerHTML = ''; // Clear existing list

    files.forEach(file => {
        const li = document.createElement('li');
        li.textContent = file.name;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteFile(file.id);
        li.appendChild(deleteButton);
        fileList.appendChild(li);
    });
}

// Function to delete a file
async function deleteFile(fileId) {
    const response = await fetch(`/files/${fileId}`, {
        method: 'DELETE',
    });

    const result = await response.json();
    if (result.success) {
        alert('File deleted successfully!');
        loadFiles(); // Reload the file list
    } else {
        alert('Error deleting file.');
    }
}

// Load files on page load
loadFiles();

