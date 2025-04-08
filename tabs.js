/**
 * tabs.js - Handles tab functionality and other UI interactions
 */

// Team section tabs functionality
function initTeamTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(tc => tc.classList.remove('active'));
  
        // Add active class to clicked button and corresponding content
        btn.classList.add('active');
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
      });
    });
  }
  
  // About section scroll animation
  function initAboutAnimation() {
    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-reveal");
        }
      });
    }, { threshold: 0.3 });
  
    const aboutTarget = document.querySelector(".content-left");
    if (aboutTarget) {
      aboutObserver.observe(aboutTarget);
    }
  }
  
  // Family section scroll animations
  function initFamilyAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-reveal');
            }
        });
    }, observerOptions);

    // Observe all team sections
    document.querySelectorAll('.testimonial-outer, .card, .testimonial-container, .member-list-container').forEach(el => {
        observer.observe(el);
    });
  }
  
  // Event timeline scroll animation
  function initEventAnimations() {
    const eventObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });
  
    document.querySelectorAll('.event-timeline-item').forEach(el => {
      eventObserver.observe(el);
    });
  }
  
  function initTeamSearch() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchContainer = document.querySelector('.search-container');
    const suggestionsContainer = document.getElementById('search-suggestions');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Focus the input when the search button is clicked
    searchButton.addEventListener('click', function() {
        searchInput.focus();
    });

    // Show suggestions while typing
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const activeTab = document.querySelector('.tab-content.active');
        
        if (activeTab.id === 'execoms' && searchTerm.length > 0) {
            const teamMembers = activeTab.querySelectorAll('.name-grid span');
            const suggestions = [];
            
            teamMembers.forEach(member => {
                const memberName = member.textContent.toLowerCase();
                if (memberName.includes(searchTerm)) {
                    suggestions.push({
                        name: member.textContent,
                        element: member
                    });
                }
            });

            // Update suggestions container
            suggestionsContainer.innerHTML = '';
            suggestions.forEach(suggestion => {
                const div = document.createElement('div');
                div.className = 'suggestion-item';
                div.textContent = suggestion.name;
                div.addEventListener('click', () => {
                    searchInput.value = suggestion.name;
                    suggestionsContainer.classList.remove('active');
                    
                    // Remove any existing highlights
                    const allMembers = activeTab.querySelectorAll('.name-grid span');
                    allMembers.forEach(member => {
                        member.classList.remove('member-highlight');
                    });
                    
                    // Add highlight to the selected member
                    suggestion.element.classList.add('member-highlight');
                    
                    // Scroll to the member with smooth behavior
                    suggestion.element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                });
                suggestionsContainer.appendChild(div);
            });

            suggestionsContainer.classList.toggle('active', suggestions.length > 0);
        } else {
            suggestionsContainer.classList.remove('active');
        }
    });

    // Hide suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchContainer.contains(e.target)) {
            suggestionsContainer.classList.remove('active');
        }
    });

    // Search functionality on Enter key press
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchContainer.classList.add('spinning');
            suggestionsContainer.classList.remove('active');
            
            const searchTerm = e.target.value.toLowerCase();
            highlightAndScrollToMember(searchTerm);
            
            // Remove the spinning class after animation completes
            setTimeout(() => {
                searchContainer.classList.remove('spinning');
            }, 1000);
        }
    });

    // Helper function to highlight and scroll to member
    function highlightAndScrollToMember(searchTerm) {
        const activeTab = document.querySelector('.tab-content.active');
        if (activeTab.id === 'execoms') {
            const teamMembers = activeTab.querySelectorAll('.name-grid span');
            let firstMatch = null;

            teamMembers.forEach(member => {
                member.classList.remove('member-highlight');
                const memberName = member.textContent.toLowerCase();
                if (searchTerm.length > 0 && memberName.includes(searchTerm)) {
                    member.classList.add('member-highlight');
                    if (!firstMatch) {
                        firstMatch = member;
                    }
                }
            });

            if (firstMatch) {
                firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }

    // Clear search when switching tabs
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            searchInput.value = '';
            suggestionsContainer.classList.remove('active');
            const activeTab = document.querySelector('.tab-content.active');
            if (activeTab.id === 'execoms') {
                const teamMembers = activeTab.querySelectorAll('.name-grid span');
                teamMembers.forEach(member => {
                    member.classList.remove('member-highlight');
                });
            }
        });
    });
  }
  
  // Initialize all UI interactions
  document.addEventListener('DOMContentLoaded', () => {
    initTeamTabs();
    initAboutAnimation();
    initFamilyAnimations();
    initEventAnimations();
    initTeamSearch();
  });