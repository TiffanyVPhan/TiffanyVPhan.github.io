
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

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});
