// 02-video.js

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = new Player(document.getElementById('vimeo-player'));

const localStorageKey = 'videoplayer-current-time';

vimeoPlayer.on(
  'timeupdate',
  throttle(async function (event) {
    const time = await vimeoPlayer.getCurrentTime();
    localStorage.setItem(localStorageKey, time);
  }, 1000)
); // Оновлення часу не частіше ніж раз на секунду

window.addEventListener('DOMContentLoaded', async () => {
  const savedTime = localStorage.getItem(localStorageKey);
  if (savedTime) {
    await vimeoPlayer.setCurrentTime(savedTime);
  }
});
