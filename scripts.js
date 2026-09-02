// Global variables
let allPublications = [];
let showingSelected = true;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  // Load publications data
  loadPublications();

  // Initialize animation delays for sections
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.style.animationDelay = `${index * 0.1}s`;
  });

  // Add event listener for toggle button
  const toggleButton = document.getElementById('toggle-publications');
  if (toggleButton) {
    toggleButton.addEventListener('click', togglePublications);
  }
});

// Load publications from JSON file
function loadPublications() {
  fetch('publications.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log("Publications loaded successfully:", data);
      allPublications = data.publications;
      renderPublications(true);
    })
    .catch(error => {
      console.error('Error loading publications:', error);
      // Create fallback publications display if JSON loading fails
      displayFallbackPublications();
    });
}

// Fallback if JSON loading fails
function displayFallbackPublications() {
  const container = document.getElementById('publications-container');
  container.innerHTML = `Error loading publications.`;
}

// Toggle between showing all or selected publications
function togglePublications() {
  showingSelected = !showingSelected;
  renderPublications(showingSelected);

  // Update button text
  const toggleButton = document.getElementById('toggle-publications');
  toggleButton.textContent = showingSelected ? 'Show All' : 'Show Selected';
  const toggleHeader = document.getElementById('toggle-header');
  toggleHeader.textContent = showingSelected ? 'Selected Publications' : 'All Publications';
}

// Render publications based on selection state
function renderPublications(selectedOnly) {
  const publicationsContainer = document.getElementById('publications-container');
  publicationsContainer.innerHTML = '';

  const pubsToShow = selectedOnly ?
    allPublications.filter(pub => pub.selected === 1) :
    allPublications;

  pubsToShow.forEach(publication => {
    const pubElement = createPublicationElement(publication);
    publicationsContainer.appendChild(pubElement);
  });
}

// Create HTML element for a publication
function createPublicationElement(publication) {
  const pubItem = document.createElement('div');
  pubItem.className = 'publication-item';

  // Create thumbnail media
  const thumbnail = document.createElement('div');
  thumbnail.className = 'pub-thumbnail';
  const isVideo = publication.media_type === 'video' || /\.(mp4|webm|mov)$/i.test(publication.thumbnail);
  thumbnail.onclick = () => openModal(publication.thumbnail, isVideo ? 'video' : 'image');

  const thumbnailMedia = document.createElement(isVideo ? 'video' : 'img');
  thumbnailMedia.src = publication.thumbnail;
  if (isVideo) {
    thumbnailMedia.muted = true;
    thumbnailMedia.autoplay = true;
    thumbnailMedia.loop = true;
    thumbnailMedia.playsInline = true;
    thumbnailMedia.preload = 'metadata';
    thumbnailMedia.setAttribute('aria-label', `${publication.title} demo video`);
  } else {
    thumbnailMedia.alt = `${publication.title} thumbnail`;
    thumbnailMedia.loading = 'lazy';
  }
  thumbnail.appendChild(thumbnailMedia);

  // Create content container
  const content = document.createElement('div');
  content.className = 'pub-content';

  // Add title
  const title = document.createElement('div');
  title.className = 'pub-title';
  title.textContent = publication.title;
  content.appendChild(title);

  // Add authors with highlight
  const authors = document.createElement('div');
  authors.className = 'pub-authors';

  // Format authors with highlighting
  let authorsHTML = '';
  publication.authors.forEach((author, index) => {
    if (author.includes('Yihao Meng')) {
      authorsHTML += `<span class="highlight-name">${author}</span>`;
    } else {
      authorsHTML += author;
    }

    if (index < publication.authors.length - 1) {
      authorsHTML += ', ';
    }
  });

  authors.innerHTML = authorsHTML;
  content.appendChild(authors);

  if (publication.author_note) {
    const authorNote = document.createElement('div');
    authorNote.className = 'pub-author-note';
    authorNote.textContent = publication.author_note;
    content.appendChild(authorNote);
  }

  // Add venue with award if present
  const venueContainer = document.createElement('div');
  venueContainer.className = 'pub-venue-container';

  const venue = document.createElement('div');
  venue.className = 'pub-venue';
  venue.textContent = publication.venue;
  venueContainer.appendChild(venue);

  // Add award if it exists
  if (publication.award && publication.award.length > 0) {
    const award = document.createElement('div');
    award.className = 'pub-award';
    award.textContent = publication.award;
    venueContainer.appendChild(award);
  }

  content.appendChild(venueContainer);

  // Add links if they exist
  if (publication.links) {
    const links = document.createElement('div');
    links.className = 'pub-links';

    if (publication.links.pdf) {
      const pdfLink = document.createElement('a');
      pdfLink.href = publication.links.pdf;
      pdfLink.textContent = '[PDF]';
      pdfLink.target = '_blank';
      pdfLink.rel = 'noopener noreferrer';
      links.appendChild(pdfLink);
    }

    if (publication.links.project) {
      const projectLink = document.createElement('a');
      projectLink.href = publication.links.project;
      projectLink.textContent = '[Project Page]';
      projectLink.target = '_blank';
      projectLink.rel = 'noopener noreferrer';
      links.appendChild(projectLink);
    }

    if (publication.links.github && publication.links.code && publication.links.show_stars !== false) {
      const starLink = document.createElement('a');
      starLink.href = publication.links.code;
      starLink.className = 'github-stars';
      starLink.target = '_blank';
      starLink.rel = 'noopener noreferrer';
      starLink.setAttribute('aria-label', `View ${publication.title} code and GitHub stars`);

      const starBadge = document.createElement('img');
      starBadge.src = `https://img.shields.io/github/stars/${publication.links.github}?style=social`;
      starBadge.alt = `GitHub stars for ${publication.links.github}`;
      starBadge.loading = 'lazy';
      starLink.appendChild(starBadge);
      links.appendChild(starLink);
    } else if (publication.links.code) {
      const codeLink = document.createElement('a');
      codeLink.href = publication.links.code;
      codeLink.textContent = '[Code]';
      codeLink.target = '_blank';
      codeLink.rel = 'noopener noreferrer';
      links.appendChild(codeLink);
    }

    content.appendChild(links);
  }

  // Assemble the publication item
  pubItem.appendChild(thumbnail);
  pubItem.appendChild(content);

  return pubItem;
}

// Modal functionality for viewing original images
function openModal(mediaSrc, mediaType = 'image') {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const modalVideo = document.getElementById('modalVideo');

  if (mediaType === 'video') {
    modalImg.style.display = 'none';
    modalVideo.style.display = 'block';
    modalVideo.src = mediaSrc;
    modalVideo.play().catch(() => {});
  } else {
    modalVideo.pause();
    modalVideo.removeAttribute('src');
    modalVideo.style.display = 'none';
    modalImg.style.display = 'block';
    modalImg.src = mediaSrc;
  }

  modal.style.display = "block";
  setTimeout(() => {
    modal.classList.add('show');
  }, 10);
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  const modalVideo = document.getElementById('modalVideo');
  modal.classList.remove('show');
  modalVideo.pause();
  setTimeout(() => {
    modal.style.display = "none";
    modalVideo.removeAttribute('src');
  }, 300);
}

// Close modal when clicking outside the image
window.onclick = function(event) {
  const modal = document.getElementById('imageModal');
  if (event.target == modal) {
    closeModal();
  }
}
