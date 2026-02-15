
let dailyCount = parseInt(localStorage.getItem('dailyCount') || 0);
let lastDate = localStorage.getItem('lastDate') || new Date().toDateString();

if (lastDate !== new Date().toDateString()) {
    dailyCount = 0;
    localStorage.setItem('lastDate', new Date().toDateString());
}
updateLimitMsg();

const uploadArea = document.getElementById('uploadArea');
const imageInput = document.getElementById('imageInput');
const removeBtn = document.getElementById('removeBtn');
const progress = document.getElementById('progress');
const progressBar = document.getElementById('progress-bar');
const preview = document.getElementById('preview');
const download = document.getElementById('download');
const downloadLink = document.getElementById('downloadLink');

// Drag & Drop
uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('dragover');
});
uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('dragover');
});
uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        imageInput.files = files;
        uploadArea.innerHTML = `<p>File selected: ${files[0].name}</p>`;
    }
});
uploadArea.addEventListener('click', () => imageInput.click());
imageInput.addEventListener('change', () => {
    if (imageInput.files[0]) {
        uploadArea.innerHTML = `<p>File selected: ${imageInput.files[0].name}</p>`;
    }
});

async function removeBackground() {
    if (!imageInput.files[0]) {
        alert('Please select an image first.');
        return;
    }
    if (dailyCount >= 10) {
        alert('Daily free limit reached! Upgrade to premium for unlimited use.');
        return;
    }

    removeBtn.disabled = true;
    progress.style.display = 'block';
    preview.style.display = 'none';
    download.style.display = 'none';
    progressBar.style.width = '0%';

    const formData = new FormData();
    formData.append('image_file', imageInput.files[0]);
    formData.append('size', 'auto'); // HD quality

    try {
        progressBar.style.width = '50%';
        const response = await fetch('https://api.remove.bg/v1.0/removebg', {
            method: 'POST',
            headers: {
                'X-Api-Key': 'YOUR_REMOVE_BG_API_KEY' // अपना API key डालें
            },
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to process image. Check API key or try again.');
        }

        progressBar.style.width = '100%';
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);

        preview.src = url;
        preview.style.display = 'block';
        downloadLink.href = url;
        download.style.display = 'block';

        dailyCount++;
        localStorage.setItem('dailyCount', dailyCount);
        updateLimitMsg();
    } catch (error) {
        alert('Error: ' + error.message);
    } finally {
        removeBtn.disabled = false;
        progress.style.display = 'none';
    }
}

function updateLimitMsg() {
    const limitMsg = document.getElementById('limit-msg');
    limitMsg.textContent = `Free daily limit: ${10 - dailyCount} images left.`;
}
