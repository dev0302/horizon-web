/**
 * member-modal.js - Handles the member modal functionality
 */

// Member data structure
const memberData = {
    'udbhav': {
        name: 'Udbhav',
        position: 'President',
        branch: 'Electronics and Communication Engineering',
        year: '2nd Year',
        description: 'Passionate about Leadership and achieving goals together. Leading the Horizon team with dedication and vision.',
        image: './horizon_family_images/udbhav.png'
    },
    'riya': {
        name: 'Riya',
        position: 'Vice President',
        branch: 'Computer Science',
        year: '1st Year',
        description: 'Creative thinker and effective communicator. Bringing innovative ideas to the team.',
        image: './horizon_family_images/riya.png'
    },
    'areen': {
        name: 'Areen Kaur',
        position: 'General Secretary',
        branch: 'Computer Science',
        year: '1st Year',
        description: 'Dedicated to organizing and managing society events with precision and creativity.',
        image: './horizon_family_images/areen.png'
    },
    // 'yash_nagar': {
    //     name: 'Yash Nagar',
    //     position: 'Treasurer',
    //     branch: 'Computer Science',
    //     year: '1st Year',
    //     description: '',
    //     image: './horizon_family_images/yash_nagar.png'
    // }
};

// Initialize modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('memberModal');
    const modalImage = modal.querySelector('.modal-image img');
    const modalName = modal.querySelector('h2');
    const modalPosition = modal.querySelector('.position');
    const modalBranch = modal.querySelector('.branch');
    const modalYear = modal.querySelector('.year');
    const modalDescription = modal.querySelector('.modal-description');
    const closeBtn = modal.querySelector('.modal-close');

    // Function to open modal with member data
    function openMemberModal(memberId) {
        const member = memberData[memberId];
        if (member) {
            modalImage.src = member.image;
            modalImage.alt = member.name;
            modalName.textContent = member.name;
            modalPosition.textContent = member.position;
            modalBranch.textContent = member.branch;
            modalYear.textContent = member.year;
            modalDescription.textContent = member.description;
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            feather.replace();
        }
    }

    // Add click event listeners to view profile buttons
    document.querySelectorAll('.view-profile-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.testimonial-card');
            const memberId = card.getAttribute('data-member');
            openMemberModal(memberId);
        });
    });

    // Add click event listeners to testimonial cards
    document.querySelectorAll('.testimonial-card').forEach(card => {
        card.addEventListener('click', function() {
            const memberId = this.getAttribute('data-member');
            if (memberId) {
                openMemberModal(memberId);
            }
        });
    });

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close modal when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}); 