document.addEventListener('DOMContentLoaded', function() {
            // Add interactive animations
            document.querySelectorAll('.form-input, .form-select').forEach(input => {
                input.addEventListener('focus', () => {
                    input.style.transform = 'scale(1.02)';
                    input.style.boxShadow = '0 0 15px rgba(76, 175, 80, 0.5)';
                });
                
                input.addEventListener('blur', () => {
                    input.style.transform = 'scale(1)';
                    input.style.boxShadow = 'none';
                });
            });
            
            // Form submission handlers
            const form1 = document.getElementById('absence-form')
            form1.addEventListener('submit', async (e) => {
                e.preventDefault();
                const firstName = document.getElementById('absent-first-name').value;
                const lastName = document.getElementById('absent-last-name').value;
                const date = document.getElementById('absent-date').value;
                
                if (!firstName || !lastName || !date) {
                    showStatus('absence-status', 'Please fill all fields', 'error');
                    return;
                }
                
                const teacherData = new FormData(form1)
                const req = Object.fromEntries(teacherData)

                const response = await fetch("/absent/teacher", {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                    }, 
                body: JSON.stringify(req)
                })
                    const data = await response.json()
                    console.log(data)

                    window.location.href = "/absent"
            });
            

            const form2 = document.getElementById('add-teacher-form')
            form2.addEventListener('submit', async (e) => {
                e.preventDefault();
                const firstName = document.getElementById('add-first-name').value;
                const lastName = document.getElementById('add-last-name').value;
                const subject = document.getElementById('add-subject').value;
                
                if (!firstName || !lastName || !subject) {
                    showStatus('add-status', 'Please fill all fields', 'error');
                    return;
                }
                
                const teacherData = new FormData(form2)
                const req = Object.fromEntries(teacherData)

                const response = await fetch("/add/teacher", {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                    }, 
                body: JSON.stringify(req)
                })
                const data = await response.json()
                console.log(data)

                window.location.href = "/absent"
            });
            

            const form3 = document.getElementById('remove-teacher-form')
            form3.addEventListener('submit', async (e) => {
                e.preventDefault();
                const firstName = document.getElementById('remove-first-name').value;
                const lastName = document.getElementById('remove-last-name').value;
                const reason = document.getElementById('remove-reason').value;
                
                if (!firstName || !lastName || !reason) {
                    showStatus('remove-status', 'Please fill all fields', 'error');
                    return;
                }
                
                const teacherData = new FormData(form3)
                const req = Object.fromEntries(teacherData)

                const response = await fetch("/remove/teacher", {
                method: "DELETE", 
                headers: {
                    "Content-Type": "application/json"
                    }, 
                body: JSON.stringify(req)
                })
                    const data = await response.json()
                    console.log(data)

                    window.location.href = "/absent"
            });
            

            const form4 = document.getElementById('update-schedule-form')
            form4.addEventListener('submit', function(e) {
                e.preventDefault();
                const firstName = document.getElementById('update-first-name').value;
                const lastName = document.getElementById('update-last-name').value;
                const period = document.getElementById('update-period').value;
                const currentClass = document.getElementById('current-class').value;
                const newClass = document.getElementById('new-class').value;
                
                if (!firstName || !lastName || !period || !currentClass || !newClass) {
                    showStatus('update-status', 'Please fill all fields', 'error');
                    return;
                }
                
                showStatus('update-status', `Schedule updated for ${firstName} ${lastName}: Period ${period} changed from ${currentClass} to ${newClass}`, 'success');
                this.reset();
            });
            
            // Helper functions
            function showStatus(elementId, message, type) {
                const element = document.getElementById(elementId);
                element.textContent = message;
                element.className = `status-message ${type}`;
                
                // Auto hide after 5 seconds
                setTimeout(() => {
                    element.className = 'status-message';
                }, 5000);
            }
            
            function formatDate(dateString) {
                const date = new Date(dateString);
                return date.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                });
            }
            
            // Add animation to page title
            const title = document.querySelector('.title');
            setTimeout(() => {
                title.style.transition = 'all 0.8s ease';
                title.style.letterSpacing = '4px';
            }, 1000);
            
            // Set today's date as default for absence date
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('absent-date').value = today;
        });