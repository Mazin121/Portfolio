// JavaScript for handling form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Extract form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (name && email && message) {
        alert('Thank you for your message, ' + name + '!');
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
// JavaScript for handling mobile navigation toggle
document.getElementById('nav-toggle').addEventListener('click', function() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('active');
});
