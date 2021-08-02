var ghpages = require('gh-pages');

ghpages.publish('public', {
  branch: 'master',
  repo: 'https://github.com/Pliskeviski/pliskeviski.github.io.git'
}, () => {
  'Deploy Failed'
});