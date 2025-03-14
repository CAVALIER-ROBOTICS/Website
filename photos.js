const galleries = {
    'folder1': [
        'https://drive.google.com/drive/folders/1e2X8h00izyrghsRavk43leD2yKg92v6T?usp=sharing',
        // Add more image URLs
    ],
    // Add more folders as needed
};

// First, you'll need to initialize the Google Drive API
function loadDriveAPI() {
    gapi.client.init({
        apiKey: 'AIzaSyBB1GMKC0OhCKIBIh5dQMoDaOUYrGLnNrw',  // The API key you got from Google Cloud Console
        clientId: '1028451043458-dd5tam6hdb6bjc5rp9isq179oukaf038.apps.googleusercontent.com',  // The OAuth client ID you got
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
        scope: 'https://www.googleapis.com/auth/drive.readonly'
    }).then(function() {
        // API is initialized and ready to use
        console.log('Google Drive API initialized');
    }).catch(function(error) {
        console.error('Error initializing Google Drive API:', error);
    });
}

// Function to load images from a folder
async function loadFolderContents(folderId) {
    const modal = document.getElementById('galleryModal');
    const content = document.getElementById('modalContent');
    content.innerHTML = '';

    try {
        const response = await gapi.client.drive.files.list({
            q: `'${folderId}' in parents and mimeType contains 'image/'`,
            fields: 'files(id, name, webContentLink)',
            orderBy: 'name'
        });

        const files = response.result.files;
        files.forEach(file => {
            const img = document.createElement('img');
            img.src = `https://drive.google.com/uc?export=view&id=${file.id}`;
            img.className = 'modal-image';
            content.appendChild(img);
        });

        modal.style.display = 'block';
    } catch (error) {
        console.error('Error loading images:', error);
    }
}

// Update your openGallery function
function openGallery(folderId) {
    loadFolderContents(folderId);
}

function closeGallery() {
    document.getElementById('galleryModal').style.display = 'none';
}

// Close modal when clicking outside of images
window.onclick = function(event) {
    const modal = document.getElementById('galleryModal');
    if (event.target == modal) {
        closeGallery();
    }
}

