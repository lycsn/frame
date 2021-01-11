    // ios输入框不回弹   轻提示  解决ios10版本以上双击放大和缩放问题  meta设置在Safari中无效 阻止双击放大
       
       // ios输入框不回弹
        $('input,textarea').on('blur', function () {
            var ua = navigator.userAgent.toLowerCase();
            if (/micromessenger/.test(ua)) {
                if (/iphone|ipad|ipod/.test(ua)) {
                    var currentPosition, timer;
                    var speed = 1;
                    timer = setInterval(function () {
                        currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
                        currentPosition -= speed;
                        window.scrollTo(0, currentPosition);
                        currentPosition += speed;
                        window.scrollTo(0, currentPosition);
                        clearInterval(timer);
                    }, 1);
                }
            }
        });

        // 轻提示
        function isToast(title) {
            $(".tsbox").css({
                "display": "flex"
            });
            $(".tisi").html(title);
            setTimeout(function () {
                $(".tsbox").css({
                    "display": "none"
                });
                $(".tisi").html('');
            }, 2000)
            return;
        }

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
        document.addEventListener('gesturestart', function (event) {
            event.preventDefault();
        });