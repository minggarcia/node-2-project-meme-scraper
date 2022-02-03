/* const app = express();

app.get('/', (req, res) => {
  let url = 'https://memegen-link-examples-upleveled.netlify.app/'
  // making a request
  request(url, (error, response, html) => {
    if(!error) {
      let $ = cheerio.load(html)
      let imgsrc = $('#images').attr('src')
      console.log(imgsrc) */

/* request(
  'https://memegen-link-examples-upleveled.netlify.app/',
  (error, response, html) => {
    if (!error) {
      const $ = cheerio.load(html);
      const imageMeme = $('img').attr('src');
      console.log(imageMeme);
    }
  },
); */

// const fs = require('fs') // Built-in filesystem package for Node.js
// const fetch = require('node-fetch')

/* const imageUrl = 'https://memegen-link-examples-upleveled.netlify.app/';

fetch(imageUrl).attr('src') =>
  res.body.pipe(fs.createWriteStream('./path/to/image.png')),
// ); */
// const url = 'https://memegen-link-examples-upleveled.netlify.app/';
// const $ = require('cheerio');
// requestPromise(url)
//   .then(function (html) {
//     //success!
//     console.log($('img', html).text());
//     // console.log(('img', html));
//   })
//   .catch(function (err) {
//     //handle error
//   });
// const memeSourceArray = [];

// request(
//   'https://memegen-link-examples-upleveled.netlify.app/',
//   (err, resp, html) => {
//     if (!err) {
//       const $ = cheerio.load(html);
//       // getting the source:
//       const memeObject = $('img');
//       // make loop and savefirst 10 img in an array
//       for (let i = 0; i < 10; i++) {
//         const memeSource = memeObject[i].attribs.src;
//         memeSourceArray.push(memeSource);
//       }
//     }
//     console.log(memeSourceArray);
//     const imageUrl = memeSourceArray;
//   },
// );

// fetch
//   .then(imageUrl)
//   .then((res) => res.body.pipe(fs.createWriteStream('./memes')));
// const memeSourceArray = [];

// request(
//   'https://memegen-link-examples-upleveled.netlify.app/',
//   (err, resp, html) => {
//     if (!err) {
//       const $ = cheerio.load(html);
//       // getting the source:
//       const memeObject = $('img');
//       // make loop and savefirst 10 img in an array
//       for (let i = 0; i < 10; i++) {
//         const memeSource = memeObject[i].attribs.src;
//         memeSourceArray.push(memeSource);
//       }
//     }
//     console.log(memeSourceArray);
//     const imageUrl = memeSourceArray;
//   },
// );

// fetch
//   .then(imageUrl)
//   .then((res) => res.body.pipe(fs.createWriteStream('./memes')));
