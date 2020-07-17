let controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 'onLeave',
    duration: '200%' 
  }
});

let scene = new ScrollMagic.Scene({
  triggerElement: '.bg-2'
})
.setClassToggle('.bg-2', 'show')
.addTo(controller);


let slides = document.querySelectorAll('section.panel');

for (let i=0; i<slides.length; i++) {
  new ScrollMagic.Scene({
      triggerElement: slides[i]
    })
    .setPin(slides[i], {pushFollowers: false})
    .addIndicators() 
    .addTo(controller);
}

let arrowID = document.getElementById('arrow1');

let myScrollFunc = function () {
  let y = window.scrollY;
  if (y >= 800) {
    arrowID.classList = "arrow hide"
  } else {
    arrowID.classList = "arrow show"
  }
};

window.addEventListener("scroll", myScrollFunc);
