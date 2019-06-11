start();

function start() {
  ('use strict');

  var timeline;

  TweenMax.set('#solidarity', {
    y: 25,
    autoAlpha: 0,
    scale: 0.5,
    transformOrigin: '50% 50%'
  });
  TweenMax.set('#rainbow-holder', { x: 100, autoAlpha: 0 });
  TweenMax.set('#stonewall', { y: 80, autoAlpha: 0 });
  TweenMax.set(['#g', '#b', '#t', '#q', '#plus'], { autoAlpha: 0 });

  const onAnimationComplete = function() {
    console.log('Animation Duration: ' + timeline.time() + 's');
  };

  timeline = new TimelineMax({
    delay: 0.5,
    onComplete: onAnimationComplete
  });

  timeline.pause();
  timeline.play();

  timeline
    .to('#rainbow-holder', 1, { autoAlpha: 1 })
    .to(['#o', '#two', '#k', '#l'], 1, {
      force3D: true,
      rotationz: 0.1,
      autoAlpha: 1,
      ease: Power2.easeOut
    })
    .to('#rainbow-holder', 1, { x: 0 })
    .to('#l', 1, { fill: '#ED1C24', ease: Power0.easeInOut })

    .staggerFromTo(
      ['#g', '#b', '#t', '#q', '#plus'],
      0.5,
      { scale: 0.8, transformOrigin: '50% 50%' },
      { scale: 1, autoAlpha: 1, delay: 0.3 },
      0.4
    )
    .to(
      '#solidarity',
      1,
      {
        y: 10,
        force3D: true,
        rotationz: 0.1,
        autoAlpha: 1,
        ease: Power2.easeInOut
      },
      '+=0.4'
    )
    .to(
      '#stonewall',
      1,
      {
        force3D: true,
        rotationz: 0.1,
        autoAlpha: 1,
        ease: Power2.easeInOut,
        onComplete: closeModal
      },
      '+=0.4'
    );
}

function closeModal() {
  setTimeout(function() {
    $('#modalSolidarity').modal('hide');
  }, 2000);
}

function openModal() {
  $('#modalSolidarity').modal('show');
}
