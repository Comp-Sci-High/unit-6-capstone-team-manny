// Add animation to page title
        const title = document.querySelector('.title');
        setTimeout(() => {
            title.style.transition = 'all 0.8s ease';
            title.style.letterSpacing = '4px';
        }, 1000);
        
        // Add hover effect to teacher cards
        const teacherCards = document.querySelectorAll('.teacher-card');
        
        teacherCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-20px)';
                card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.5)';
                card.style.borderColor = '#4CAF50';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
                card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
            });
        });
        
        // Add floating effect to the Python logo
        const pythonLogo = document.querySelector('.python-logo');
        pythonLogo.addEventListener('mouseover', () => {
            pythonLogo.style.animation = 'float 3s ease-in-out infinite';
        });
        
        pythonLogo.addEventListener('mouseout', () => {
            pythonLogo.style.animation = 'pulse 2s infinite';
        });