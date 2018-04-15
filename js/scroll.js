var scrollElm = (function() {
  if('scrollingElement' in document) return document.scrollingElement;
  if(navigator.userAgent.indexOf('WebKit') != -1) return document.body;
  return document.documentElement;
})();
(function() {
  var duration = 500;
  var ignore = '.noscroll';
  var easing = function (t, b, c, d) { return c * (0.5 - Math.cos(t / d * Math.PI) / 2) + b; }; //jswing
  var smoothScrollElm = document.querySelectorAll('a[href^="#"]:not(' + ignore +')');
  Array.prototype.forEach.call(smoothScrollElm, function(elm) {
    elm.addEventListener('click', function(e) {
      e.preventDefault();
      var targetElm = document.querySelector(elm.getAttribute('href'));
      if(!targetElm) return;
      var targetPos = targetElm.getBoundingClientRect().top;
      var startTime = Date.now();
      var scrollFrom = scrollElm.scrollTop;
      (function loop() {
        var currentTime = Date.now() - startTime;
        if(currentTime < duration) {
          scrollTo(0, easing(currentTime, scrollFrom, targetPos, duration));
          window.requestAnimationFrame(loop);
        } else {
          scrollTo(0, targetPos + scrollFrom);
        }
      })();
    })
  });
})();
