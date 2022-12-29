function readerList() {
  const activeClass = 'active';

  document.querySelectorAll('.reader-list').forEach(readerList => {
    let items = readerList.querySelectorAll('.reader-item');

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