//Dropdown menu

const dropdownMenuItemTitles = document.querySelectorAll('.dropdownMenuItemTitle');

dropdownMenuItemTitles.forEach(menuItemTitle => {
  menuItemTitle.addEventListener('click', (e) => {

    const menuItemData = e.target.nextElementSibling;

    menuItemData.style.setProperty('--openHeight', menuItemData.scrollHeight + 'px');

    menuItemData.classList.toggle('show');
    menuItemData.classList.toggle('hide');

    e.target.classList.toggle('flipArrow');

  });
});

//Close/Opens all tabs in form

document.getElementById('openAllBtn').addEventListener('click', () => {

  dropdownMenuItemTitles.forEach(form => form.nextElementSibling.style.setProperty('--openHeight', form.nextElementSibling.scrollHeight + 'px'));
  dropdownMenuItemTitles.forEach(form => form.nextElementSibling.classList.add('show'));
  dropdownMenuItemTitles.forEach(form => form.nextElementSibling.classList.remove('hide'));
  dropdownMenuItemTitles.forEach(form => form.classList.add('flipArrow'));

});

document.getElementById('closeAllBtn').addEventListener('click', () => {

  dropdownMenuItemTitles.forEach(form => form.nextElementSibling.classList.add('hide'));
  dropdownMenuItemTitles.forEach(form => form.nextElementSibling.classList.remove('show'));
  dropdownMenuItemTitles.forEach(form => form.classList.remove('flipArrow'));

});