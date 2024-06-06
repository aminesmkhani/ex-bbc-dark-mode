function createToggleButton()
{
    const button = document.createElement('button');
    button.id = "bbcdarkmode-toggle-button";
    button.textContent = "Toggle Dark Mode 🌙";
    button.addEventListener('click',toggleDarkmode);
    document.body.prepend(button);
}

function toggleDarkmode(){
    document.body.classList.toggle('bbc-dark-mode-dark');
    console.log('Dark mode toggled');
}

createToggleButton();