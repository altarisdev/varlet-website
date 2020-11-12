// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/main.css';

console.log('Come on, give the site some time. I swear I will make it fancier in the future.');

export default function(Vue, { router, head, isClient }) {
  router.beforeEach((to, _from, next) => {
    const redirections = {
      '/docs/': '/docs/basics/introduction/',
      '/docs/basics/': '/docs/basics/introduction/',
      '/docs/concepts/': '/docs/concepts/action/'
    };

    if (Reflect.has(redirections, to?.path)) {
      next({ path: redirections[(to?.path)] });
    }

    next();
  });

  // Set the OpenGraph URL for each route
  router.beforeEach((to, _from, next) => {
    const url = process.env.SITE_URL + to.path;

    head.meta.push(
      {
        key: 'og:url',
        name: 'og:url',
        content: url
      },
      {
        key: 'canonical',
        rel: 'canonical',
        href: url
      }
    );
    next();
  });

  const siteName = 'Varlet';
  const siteUrl = process.env.SITE_URL || 'https://varlet.dev';

  // Add meta properties for every route
  head.meta.push(
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com/',
      crossorigin: true
    },
    {
      key: 'og:site_name',
      name: 'og:site_name',
      content: siteName
    },
    {
      key: 'og:title',
      name: 'og:title',
      content: siteName
    },
    {
      key: 'og:url',
      name: 'og:url',
      content: siteUrl
    },
    {
      key: 'og:type',
      name: 'og:type',
      content: 'website'
    },
    {
      key: 'og:image',
      name: 'og:image',
      content: siteUrl + '/logo.jpg'
    },
    {
      key: 'twitter:card',
      name: 'twitter:card',
      content: 'summary'
    },
    {
      key: 'twitter:image',
      name: 'twitter:image',
      content: siteUrl + '/logo.jpg'
    },
    {
      key: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: process.env.SITE_NAME
    }
  );
}
