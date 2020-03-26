const React = require('react');
const ReactDomServer = require('react-dom/server');
const sharp = require('sharp');
const path = require('path');

const SampleSvgComponent = () => {
  return React.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      version: '1.1',
      viewBox: '0 0 24 24',
    },
    React.createElement('path', {
      d:
        'M6.8 3.45c.87-.52 1.82-.92 2.83-1.17a2.5 2.5 0 0 0 4.74 0c1.01.25 1.96.65 2.82 1.17a2.5 2.5 0 0 0 3.36 3.36c.52.86.92 1.8 1.17 2.82a2.5 2.5 0 0 0 0 4.74c-.25 1.01-.65 1.96-1.17 2.82a2.5 2.5 0 0 0-3.36 3.36c-.86.52-1.8.92-2.82 1.17a2.5 2.5 0 0 0-4.74 0c-1.01-.25-1.96-.65-2.82-1.17a2.5 2.5 0 0 0-3.36-3.36 9.94 9.94 0 0 1-1.17-2.82 2.5 2.5 0 0 0 0-4.74c.25-1.01.65-1.96 1.17-2.82a2.5 2.5 0 0 0 3.36-3.36zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
    }),
    React.createElement('circle', {
      cx: 12,
      cy: 12,
      r: 2,
    })
  );
};

(function generateImage() {
  const fileName = Math.ceil(Math.random() * 1000) + Date.now();

  sharp(
    Buffer.from(
      ReactDomServer.renderToStaticMarkup(
        React.createElement(SampleSvgComponent)
      ),
      'utf-8'
    ),
    {
      density: 1500,
    }
  )
    .png()
    .toFile(path.resolve(__dirname, 'output', `image-${fileName}.png`))
    .then(() => console.log('done'))
    .catch(err => console.error(err));
})();
