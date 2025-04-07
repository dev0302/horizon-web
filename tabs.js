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
    const familyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-reveal");
        }
      });
    }, { threshold: 0.2 });

    // Observe mentor section
    const mentorSection = document.querySelector(".testimonial-outer");
    if (mentorSection) {
      familyObserver.observe(mentorSection);
    }

    // Observe team card section
    const teamCard = document.querySelector(".card");
    if (teamCard) {
      familyObserver.observe(teamCard);
    }

    // Observe core team section
    const coreTeam = document.querySelector(".testimonial-container");
    if (coreTeam) {
      familyObserver.observe(coreTeam);
    }

    // Observe executive team section
    const execTeam = document.querySelector(".member-list-container");
    if (execTeam) {
      familyObserver.observe(execTeam);
    }
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
  
  // Initialize all UI interactions
  document.addEventListener('DOMContentLoaded', () => {
    initTeamTabs();
    initAboutAnimation();
    initFamilyAnimations();
    initEventAnimations();
  });