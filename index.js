import axios from 'axios';
import cheerio from 'cheerio';
import fs from 'fs';
import request from 'request';

const memeUrl = 'https://memegen-link-examples-upleveled.netlify.app/';

async function getAllMemes(url) {
  try {
    const memes = [];
    const htmlMemes = await axios.get(url);

    const $ = cheerio.load(htmlMemes.data);
    const memeObjects = $('img'); // all img urls

    memeObjects.each((options, element) => {
      memes.push($(element).attr('src')); // get image source
    });
    return memes;
  } catch (error) {
    console.error(error);
  }
}

// download memes

const memeLinks = await getAllMemes(memeUrl);
const download = (imgUrl, path) => {
  request(imgUrl).pipe(fs.createWriteStream(path));
};

// save first 10 memes
for (let i = 0; i < 10; i++) {
  const imgUrl = memeLinks[i];
  const path = `./memes/0${i + 1}.jpg`;
  download(imgUrl, path);
}

console.log('Download completed');
