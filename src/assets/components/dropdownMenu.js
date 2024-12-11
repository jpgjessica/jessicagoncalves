export function setupDropdownMenu() {
  const burgerMenu = document.getElementById('burger-menu');
  const dropdown = document.getElementById('dropdown');
  const menuIcon = burgerMenu.querySelector('.material-icons');

  burgerMenu.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');

    if (dropdown.classList.contains('hidden')) {
      menuIcon.textContent = 'menu';
    } else {
      menuIcon.textContent = 'close';
    }
  });

  document.addEventListener('click', (event) => {
    if (!burgerMenu.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.classList.add('hidden');
      menuIcon.textContent = 'menu';
    }
  });
}


