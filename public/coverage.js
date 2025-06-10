document.querySelectorAll('.class-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.background = 'linear-gradient(135deg, #2d5a41, #1a3a27)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.background = 'linear-gradient(135deg, #1a3a27, #2d5a41)';
            });
        });
        
        // Add animation to navbar link
        const navLink = document.querySelector('.nav-link');
        navLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Animation effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            window.location.href = "/teachers"

        });
        
        // Add animation to page title
        const title = document.querySelector('.title');
        setTimeout(() => {
            title.style.transition = 'all 0.5s ease';
            title.style.letterSpacing = '3px';
        }, 1000);