start();

function start() {
  ('use strict');

  var timeline;

  // function traceTime(){
  // 	console.log("slideTime: " + timeline.time());
  // }

  const onAnimationComplete = function() {
    console.log('Animation Duration: ' + timeline.time() + 's');
  };

  timeline = new TimelineMax({
    delay: 0.5,
    onComplete: onAnimationComplete
  });
  timeline.pause();
  console.log(timeline);

  var t = new TweenMax();
  t.to('#solidarity', 1, { autoAlpha: 0 });
}
