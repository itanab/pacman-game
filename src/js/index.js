document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const field = new Stage(10, 10);
  field.mount(container);

  const stage = document.querySelector('.stage');
  const jayne = new Pacman(0, 3, field);
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
