// pic_auth.js

const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Remove 'selected' class from all grid items
    gridItems.forEach((gridItem) => {
      gridItem.classList.remove('selected');
    });

    // Add 'selected' class to the clicked grid item
    item.classList.add('selected');
  });
});
