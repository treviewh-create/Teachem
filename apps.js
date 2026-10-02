/*
  A Lab — the app list that feeds the Wall Magazine disc.

  To publish a new application, add ONE entry to this list. Nothing else to edit:
  the disc, the preview card, "View all" and the text all read from here.

    id          unique short name
    title       shown on the card
    category    small label under the title
    description one or two sentences shown next to the preview
    url         the page to open (put new app pages in /cards)
    palette     two hex colours for the low-poly artwork
    emblem      a few characters drawn big on the card
*/
window.APPS = [
  {
    id: 'calculator',
    title: 'Calculator',
    category: 'Tools',
    description: 'A clean everyday calculator for quick sums. Add, subtract, multiply and divide in one tap.',
    url: 'cards/Calculator.html',
    palette: ['#ff7a59', '#7a2c6e'],
    emblem: '+ − × ÷'
  },
  {
    id: 'delphi',
    title: 'Delphi Calculator',
    category: 'Research',
    description: 'A flexible Delphi-method tool. Add criteria and panelists, enter their probabilities and get the estimate.',
    url: 'cards/Delphy Calculator.html',
    palette: ['#6fd3c8', '#3b2a7a'],
    emblem: 'Δ'
  },
  {
    id: 'linear',
    title: 'Linear Programming',
    category: 'Mathematics',
    description: 'Maximise Z = Px + Qy under your own constraints. See the corner points and the feasible region plotted.',
    url: 'cards/Linear Calculator.html',
    palette: ['#ffd36b', '#b03a6c'],
    emblem: 'Z=Px+Qy'
  },
  {
    id: 'attributes',
    title: 'Attribute Comparison',
    category: 'Decision making',
    description: 'Compare attributes in pairs and let the tool rank them and work out the weights for a management decision.',
    url: 'cards/Menghitung_Perbandingan_Atribut.html',
    palette: ['#9b8cff', '#2c5a8a'],
    emblem: 'P / X'
  }
];
