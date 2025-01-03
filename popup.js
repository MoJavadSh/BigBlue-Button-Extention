const infoIcon = document.getElementById('info-icon');
const infoPage = document.getElementById('info-page');
const mainPage = document.getElementById('main-page');
const backBtn = document.getElementById('back-btn');

infoIcon.addEventListener('click', () => {
  mainPage.style.display = 'none';
  infoPage.style.display = 'block';
});

backBtn.addEventListener('click', () => {
  infoPage.style.display = 'none';
  mainPage.style.display = 'block';
});

function executeScript(code) {
  chrome.tabs.executeScript({ code }, () => {
    if (chrome.runtime.lastError) {
      console.error('Error executing script:', chrome.runtime.lastError.message);
    }
  });
}

// 2x
document.getElementById('btn-2x').addEventListener('click', () => {
  const code = `
    document.querySelectorAll('video').forEach(video => {
      video.playbackRate = 2.5;
    });
  `;
  executeScript(code);
});

//  3x
document.getElementById('btn-3x').addEventListener('click', () => {
  const code = `
    document.querySelectorAll('video').forEach(video => {
      video.playbackRate = 3;
    });
  `;
  executeScript(code);
});

// Controls
document.getElementById('btn-control-keys').addEventListener('click', () => {
  const code = `
    document.addEventListener('keydown', (event) => {
      const video = document.querySelector('video');
      if (!video) return;

      switch (event.code) {
        case 'Space':
          event.preventDefault();
          video.paused ? video.play() : video.pause();
          break;
        case 'ArrowRight':
          video.currentTime += 15;
          break;
        case 'ArrowLeft':
          video.currentTime -= 15;
          break;
      }
    });
  `;
  executeScript(code);
});