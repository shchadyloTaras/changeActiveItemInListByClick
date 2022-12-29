function activeItem() {
  const activeClass = 'active';

  document.querySelectorAll('.list').forEach(list => {
    let items = list.querySelectorAll('.list-item');

    items.forEach(item => {
      item.addEventListener('click', function () {
        items.forEach(item => {
          item.classList.remove(activeClass);
        });
        item.classList.add(activeClass);
      });
    });
  });
}
