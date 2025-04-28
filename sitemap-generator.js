require('babel-register')({
  presets: ['react', 'es2015', 'stage-0']
});

const router = require('./sitemap-routes').default;
const Sitemap = require('react-router-sitemap').default;

function generateSitemap() {
  return (
    new Sitemap(router)
      .build('https://your-domain.com')
      .save('./public/sitemap.xml')
  );
}

generateSitemap();