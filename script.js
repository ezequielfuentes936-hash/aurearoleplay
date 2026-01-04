document.querySelectorAll('.preview video').forEach(video => {
  const box = video.parentElement;

  box.addEventListener('mouseenter', () => {
    video.currentTime = 0;
    video.play();
  });

  box.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });

  // Mobile
  box.addEventListener('click', () => {
    if (video.paused) video.play();
    else video.pause();
  });
});
