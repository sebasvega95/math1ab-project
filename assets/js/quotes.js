const quotes = [
  'Con números se puede demostrar cualquier cosa.',
  'Dondequiera que haya un número está la belleza.',
  'El estudio profundo de la naturaleza es la fuente más fértil de descubrimientos matemáticos.',
  'La música es el placer que experimenta la mente humana al contar sin darse cuenta de que está contando.',
  'No hay rama de la matemática, por abstracta que sea, que no pueda aplicarse algún día a los fenómenos del mundo real.',
  'Sólo en las ciencias matemáticas existe la identidad entre las cosas que nosotros conocemos y las cosas que se conocen en modo absoluto.'
];
const authors = [
  'Thomas Carlyle',
  'Proclo',
  'Joseph Fourier',
  'Gottfried Leibniz',
  'Nikolai Lobachevski',
  'Umberto Eco'
];
const text = document.getElementById('mathTitle');
const idx = Math.floor(Math.random() * quotes.length);

text.innerHTML = `<p>${quotes[idx]}</p><footer>${authors[idx]}</footer>`;
