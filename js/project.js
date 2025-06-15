function openPopup(videoUrl) {
    document.getElementById('popup').style.display = 'flex';
    document.getElementById('videoFrame').src = videoUrl + '?autoplay=1';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('videoFrame').src = '';
}