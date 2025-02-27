// script.js
function donate(amount) {
    document.getElementById('donation-message').textContent = `Thank you for your $${amount} donation!`;
    // In a real application, you would integrate a payment gateway here.
}

function showTextPreview() {
    document.getElementById('text-preview').style.display = 'block';
    document.getElementById('pdf-preview').style.display = 'none';
}

function showPdfPreview() {
    document.getElementById('text-preview').style.display = 'none';
    document.getElementById('pdf-preview').style.display = 'block';
}


// Navigation scroll behavior
let lastScrollTop = 0;
const nav = document.querySelector('nav');
const scrollThreshold = 10; // Minimum amount of scroll to trigger hide/show

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Detect scroll direction
    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
        // Scrolling down
        nav.classList.add('nav-hidden');
    } else {
        // Scrolling up or at the top
        nav.classList.remove('nav-hidden');
    }
    
    lastScrollTop = scrollTop;
});