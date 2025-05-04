/**
 * member-modal.js - Handles the member modal functionality
 */

// Member data structure
const memberData = {
    'udbhav': {
        name: 'Udbhav',
        position: 'President',
        branch: 'ECE',
        year: '2nd Year',
        description: 'Leading the Horizon team with dedication and vision.',
        image: './horizon_family_images/udbhav.png'
    },
    'riya': {
        name: 'Riya',
        position: 'Vice President',
        branch: 'CSE',
        year: '1st Year',
        description: 'Creative thinker and effective communicator. Bringing innovative ideas to the team.',
        image: './horizon_family_images/riya.png'
    },
    'areen': {
        name: 'Areen Kaur',
        position: 'General Secretary',
        branch: 'CSE',
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
//changeeeeee
const memberData2 = {
    'mehul': {
        name: 'Mehul',
        position: 'Event Management Head',
        branch: 'CSE-AIML',
        year: '1st Year',
        image: './horizon_family_images/mehul.png'
    },
    'dushyant': {
        name: 'Dushyant',
        position: 'Event Management Head',
        branch: 'CSE-AIML',
        year: '1st Year',
        image: './horizon_family_images/dushyant.png'
    },
    'ananya_priya': {
        name: 'Ananya Priya',
        position: 'Public Speaking Head',
        branch: 'CSE-AIML',
        year: '1st Year',
        image: './horizon_family_images/ananya_priya.png'
    },
    'krishna': {
        name: 'Krishna Bhatia',
        position: 'Public Speaking Head',
        branch: 'CSE-AIML',
        year: '1st Year',
        image: './horizon_family_images/krishna.png'
    },
    'aditya_pandey': {
        name: 'Aditya Pandey',
        position: 'Video Editing Head',
        branch: 'CSE-AIML',
        year: '1st Year',
        image: './horizon_family_images/aditya_pandey.png'
    },
    'aahana': {
        name: 'Aahana',
        position: 'Sponsorship Head',
        branch: 'CSE-AIML',
        year: '1st Year',
        image: './horizon_family_images/aahana.png'
    },
    'tanvi': {
        name: 'Tanvi',
        position: 'Sponsorship Head',
        branch: 'CSE-AIML',
        year: '1st Year',
        image: './horizon_family_images/tanvi.png'
    },
    'shreya_sharma': {
        name: 'Shreya Sharma',
        position: 'Publicity Head',
        branch: 'CSE-AIML',
        year: '1st Year',
        image: './horizon_family_images/shreya_sharma.png'
    },
    'shivangi': {
        name: 'Shivangi',
        position: 'Publicity Head',
        branch: 'CSE-AIML',
        year: '1st Year',
        image: './horizon_family_images/shivangi.png'
    },
    'dev_dogra': {
        name: 'Dev Dogra',
        position: 'Social Media Head',
        branch: 'CSE-AIML',
        year: '1st Year',
        image: './horizon_family_images/dev_dogra.png'
    },
    'anushka_prakash': {
        name: 'Anushka Prakash',
        position: 'Social Media Head',
        branch: 'CSE-AIML',
        year: '1st Year',
        image: './horizon_family_images/anushka_prakash.png'
    },
    'pavni': {
        name: 'Pavni',
        position: 'Research & Analysis Head',
        branch: 'CSE-AIML',
        year: '1st Year',
        image: './horizon_family_images/pavni.png'
    },
    'bhavya_gupta': {
        name: 'Bhavya Gupta',
        position: 'Research & Analysis Head',
        branch: 'CSE-AIML',
        year: '1st Year',
        image: './horizon_family_images/bhavya_gupta.png'
    },
    'yash_kumar': {
        name: 'Yash Kumar',
        position: 'Creativity & Design Head',
        branch: 'CSE-AIML',
        year: '1st Year',
        image: './horizon_family_images/yash_kumar.png'
    },
    'dhruv': {
        name: 'Dhruv',
        position: 'Creativity & Design Head',
        branch: 'CSE-AIML',
        year: '1st Year',
        image: './horizon_family_images/dhruv.png'
    }
};

// Initialize modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('memberModal');
    // const modal2 = document.querySelector('.modal-content_heads');
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
        const member2 = memberData2[memberId];
        console.log(member2);
        
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
        //new-----------------
        else if(member2) {            
            modalImage.src = member2.image;
            modalImage.alt = member2.name;
            modalName.textContent = memberData2.name;
            modalPosition.textContent = member2.position;
            modalBranch.textContent = member2.branch;
            modalYear.textContent = member2.year;
            modalDescription.textContent = member2.description;
                    
            modal.classList.add('active');
            console.log("Added");

            // to modify the max-width when active
            document.querySelector('.modal-content').style.maxWidth = '250px';
            // Hide the description section
            document.querySelector('.modal-description').style.display = 'none';
            
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
        document.querySelector('.modal-content').style.maxWidth = '700px'; 
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