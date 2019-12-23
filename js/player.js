const playVideo = $('.player__video');
const playButtonBig = $('.player__start--big');
const playButtonSmall = $('.player__start--small');
const video = $('.player__video-vid');
const playerOverlay = $('.player__overlay');

playVideo.on("click", () => {
  if (video[0].paused) {
    video[0].play();
    playerOverlay.addClass('player__overlay--hidden');
    playButtonBig.addClass('player__start--big-pause');
    playButtonSmall.addClass('player__start--small-pause');
  }
  else {
    video[0].pause();
    playButtonBig.removeClass('player__start--big-pause');
    playButtonSmall.removeClass('player__start--small-pause');
  }  
  currentMove(); 
  }
);

function currentMove() {
  let interval;
  let durationSec = video[0].duration;
  
  if (typeof interval !== undefined) {
    clearInterval(interval);
  }

  interval = setInterval( () => {
    const completedSec = video[0].currentTime/video[0].duration * 100;
    $('.player__scrollbutton--video').css({
      left: `${completedSec}%`
    })
  , 1000})
}

$('.player__progress--video').on('click', (e) => {
  const bar = $(e.currentTarget);
  const newButtonPosition = e.pageX - bar.offset().left;
  const buttonPositionPercent = (newButtonPosition/bar.width()) * 100;
  const newPlayerTimeSec = (video[0].duration/100) * buttonPositionPercent;
  video[0].currentTime = newPlayerTimeSec;

  $('.player__scrollbutton--video').css({
    left: `${buttonPositionPercent}%`
  })
})


