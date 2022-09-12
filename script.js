const overlaySvg = document.querySelector('#svg');
const imageView = document.querySelector('#img-view');

overlaySvg.addEventListener('mouseover', (e) => {
  overlaySvg.classList.add('active');
  imageView.style.display = 'block';
});

overlaySvg.addEventListener('mouseout', (e) => {
  overlaySvg.classList.remove('active');
  imageView.style.display = 'none';
});
