document.addEventListener('DOMContentLoaded', () => {
  const stage = document.querySelector('#stage');
  const jayne = new Pacman(425, 425);
  jayne.mount(stage);

  document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowRight') {
      jayne.move('right');
      jayne.update();
    } else if (event.code === 'ArrowLeft') {
      jayne.move('left');
      jayne.update();
    } else if (event.code === 'ArrowUp') {
      jayne.move('up');
      jayne.update();
    } else if (event.code === 'ArrowDown') {
      jayne.move('down');
      jayne.update();
    }
  });
});
