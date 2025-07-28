// Main JavaScript for Read Naturally Website

// Prevent issues with older browsers
'use strict';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Add active class to current navigation item
  highlightCurrentNavItem();
  
  // Add smooth scrolling for all anchor links
  setupSmoothScrolling();
  
  // Setup image placeholders if any real images fail to load
  setupImageFallbacks();
});

/**
 * Highlights the current navigation item based on the current page
 */
function highlightCurrentNavItem() {
  // Get current page filename
  const currentPage = window.location.pathname.split('/').pop();
  
  // Find all navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Loop through each link and check if it matches current page
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    
    // If the link href matches current page or 
    // (we're on a stories page and the link is to levels)
    if (linkHref === currentPage || 
        (currentPage === 'stories.html' && linkHref === 'levels.html') ||
        (currentPage.startsWith('story') && linkHref === 'levels.html')) {
      
      // Find parent li and add active class
      const parentLi = link.parentElement;
      parentLi.classList.add('active');
    }
  });
}

/**
 * Sets up smooth scrolling for all anchor links
 */
function setupSmoothScrolling() {
  // Find all anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  // Add click event listener to each anchor link
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Only process if the href is not just "#"
      if (this.getAttribute('href') !== '#') {
        e.preventDefault();
        
        // Get the target element
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        // Scroll to the target element smoothly
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

/**
 * Sets up fallback for images that fail to load
 */
function setupImageFallbacks() {
  // Find all images
  const images = document.querySelectorAll('img');
  
  // Add error event listener to each image
  images.forEach(img => {
    img.addEventListener('error', function() {
      // Check if image is a level image
      if (this.classList.contains('level-image')) {
        this.src = 'images/placeholders/level-placeholder.jpg';
      } 
      // Check if image is a story image
      else if (this.classList.contains('story-image')) {
        this.src = 'images/placeholders/story-placeholder.jpg';
      }
      // Main image
      else if (this.classList.contains('main-image')) {
        this.src = 'images/placeholders/main-placeholder.jpg';
      }
      // Any other image
      else {
        this.src = 'images/placeholders/default-placeholder.jpg';
      }
      
      // Add a placeholder class
      this.classList.add('placeholder-image');
    });
  });
}

/**
 * Creates folder structure for storing images locally
 * This is just a reference function for setting up the website
 */
function createFolderStructure() {
  const structure = {
    css: ['styles.css'],
    js: ['main.js'],
    images: {
      levels: [
        'level1.jpg',
        'level2.jpg',
        'level3.jpg',
        'level4.jpg',
        'level5.jpg',
        'level6.jpg',
        'level7.jpg',
        'level8.jpg',
        'level9.jpg',
        'level10.jpg'
      ],
      stories: {
        level1: ['pinklakes.jpg', 'thebus.jpg'],
        level2: ['apples.jpg', 'farms.jpg'],
        level3: ['fish.jpg', 'boats.jpg'],
        level4: ['horses.jpg', 'colors.jpg'],
        level5: ['hats.jpg', 'trees.jpg'],
        level6: ['clouds.jpg', 'themoon.jpg'],
        level7: ['thezoo.jpg', 'theairport.jpg'],
        level8: ['rain.jpg', 'pets.jpg'],
        level9: ['apicnic.jpg', 'thecity.jpg'],
        level10: ['honey.jpg', 'cars.jpg']
      },
      placeholders: [
        'default-placeholder.jpg',
        'level-placeholder.jpg',
        'story-placeholder.jpg',
        'main-placeholder.jpg'
      ]
    },
    audio: {
      level1: {
        pinklakes: ['part1.mp3', 'part2.mp3', 'part3.mp3', 'keywords.mp3', 'spanish.mp3'],
        thebus: ['part1.mp3', 'part2.mp3', 'part3.mp3', 'keywords.mp3', 'spanish.mp3']
      },
      // Repeat structure for other levels...
    }
  };
  
  // This function doesn't actually create folders,
  // it's just a reference for the structure
  console.log('Reference folder structure:', structure);
}