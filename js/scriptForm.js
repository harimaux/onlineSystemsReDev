//All form info boxes
const allInfoBoxes = document.querySelectorAll('.formInfoBox');

//Dropdown menu

const dropdownMenuItemTitles = document.querySelectorAll('.dropdownMenuItemTitle');

dropdownMenuItemTitles.forEach(menuItemTitle => {
  menuItemTitle.addEventListener('click', (e) => {

    const menuItemData = e.target.nextElementSibling;

    menuItemData.style.setProperty('--openHeight', menuItemData.scrollHeight + 'px');

    menuItemData.classList.toggle('show');
    menuItemData.classList.toggle('hide');

    //Rotates menu arrow (open/close)
    e.target.classList.toggle('flipArrow');

    //Hides all info boxes
    allInfoBoxes.forEach(infoBox => infoBox.style.display = "none");

  });
});

//Close/Opens all tabs in form

document.getElementById('openAllBtn').addEventListener('click', () => {

  dropdownMenuItemTitles.forEach(form => form.nextElementSibling.style.setProperty('--openHeight', form.nextElementSibling.scrollHeight + 'px'));
  dropdownMenuItemTitles.forEach(form => form.nextElementSibling.classList.add('show'));
  dropdownMenuItemTitles.forEach(form => form.nextElementSibling.classList.remove('hide'));
  dropdownMenuItemTitles.forEach(form => form.classList.add('flipArrow'));

  //Hides all info boxes
  allInfoBoxes.forEach(infoBox => infoBox.style.display = "none");

});

document.getElementById('closeAllBtn').addEventListener('click', () => {

  dropdownMenuItemTitles.forEach(form => form.nextElementSibling.classList.add('hide'));
  dropdownMenuItemTitles.forEach(form => form.nextElementSibling.classList.remove('show'));
  dropdownMenuItemTitles.forEach(form => form.classList.remove('flipArrow'));

  //Hides all info boxes
  allInfoBoxes.forEach(infoBox => infoBox.style.display = "none");

});

//Form info icons

const allIcons = document.querySelectorAll('.formInfoIcon');

allIcons.forEach(icon => {
  icon.addEventListener('click', (e) => {

    e.target.nextElementSibling.style.display = "flex";

  });
});

allInfoBoxes.forEach(infoBox => {
  infoBox.addEventListener('click', () => {
    infoBox.style.display = "none";
  });
});