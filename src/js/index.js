const jayne = new Pacman(0);

const update = () => {
  const pacman = document.querySelector('.entity');

  pacman.style.left = `${jayne.xpos}px`;

  if (jayne.mouth) {
    pacman.style.backgroundPositionX = '0px';
  } else {
    pacman.style.backgroundPositionX = '85px';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  update();

  document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowRight') {
      jayne.moveRight();
      update();
    }
  });
});
