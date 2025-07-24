// gallery.js
// This script populates the gallery grid with approved images.

// List of approved images relative to the gallery page. When new photos are
// approved by the orchestra directors, add them to this array (e.g.
// 'images/concert1.jpg'). Ensure that the files are stored in the
// `public/images` directory so they can be served alongside the site.
const approvedImages = [
  'images/placeholder.png' // placeholder image shown until real photos are added
];

function populateGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  approvedImages.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Orchestra event photo';
    grid.appendChild(img);
  });
}

// Populate the gallery when the DOM is fully loaded
window.addEventListener('DOMContentLoaded', populateGallery);