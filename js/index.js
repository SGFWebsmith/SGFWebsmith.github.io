
// on document load log hello world, no jquery
document.addEventListener('DOMContentLoaded', function() {
    
    const enterButton = document.getElementById('enter-button');
    const navBar = document.getElementById('nav-bar');

    enterButton.addEventListener('click', function() {
        navBar.classList.remove('hidden');
    });
});
