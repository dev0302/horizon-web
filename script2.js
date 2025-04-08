document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchContainer = document.querySelector('.search-container');
  
    // Focus the input when the search button is clicked
    searchButton.addEventListener('click', function() {
      searchInput.focus();
    });
  
    // Add spinning animation when Enter key is pressed
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        searchContainer.classList.add('spinning');
        
        // Remove the spinning class after animation completes
        setTimeout(() => {
          searchContainer.classList.remove('spinning');
        }, 1000);
      }
    });
  });