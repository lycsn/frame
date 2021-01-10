//解决ios10版本以上双击放大和缩放问题  meta设置在Safari中无效
//阻止双击放大
document.documentElement.addEventListener('touchstart', function (event) {
  if (event.touches.length > 1) {
      event.preventDefault();
  }
}, false);

var lastTouchEnd = 0;
document.documentElement.addEventListener('touchend', function (event) {
  var now = Date.now();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
lastTouchEnd = now;
}, false);
//阻止双指放大
document.addEventListener('gesturestart', function(event) {
  event.preventDefault();
});