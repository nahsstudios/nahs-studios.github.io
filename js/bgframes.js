
// Fondo dinámico por scroll usando imágenes numeradas en images/bgframes/
const totalFrames = 24;
const bgFolder = 'images/bgframes/';
const ext = '.png'; // Usa WebP si tus imágenes están en ese formato

// Precarga de imágenes
const bgImages = [];
for (let i = 1; i <= totalFrames; i++) {
    const img = new Image();
    img.src = `${bgFolder}${i}${ext}`;
    bgImages.push(img);
}

function setDynamicBackground() {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
    const frame = Math.min(totalFrames, Math.max(1, Math.round(scrollPercent * (totalFrames - 1)) + 1));
    document.body.style.backgroundImage = `url('${bgFolder}${frame}${ext}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.transition = 'background-image 0.08s linear';
}

window.addEventListener('scroll', setDynamicBackground);
window.addEventListener('resize', setDynamicBackground);
document.addEventListener('DOMContentLoaded', setDynamicBackground);