$(document).ready(function() {
    
    event.preventDefault();    var xAngle = 0, yAngle = 0, zAngle = 0;
    var _xAngle = 0, _yAngle = 0, _zAngle = 0;
    var xRotate = 0, zRotate = 0, yTranslate = 0;
    var closed = true;
    document.addEventListener('keydown', function(e) {
        //alert(e.keyCode);
        switch(e.keyCode) {
            case 37:
                // left
                yAngle -= 5;
                break;

            case 38:
                // up
                xAngle += 5;                break;
            case 39:
                // right
                yAngle += 5;
                break;

            case 40:
                // down
                xAngle -= 5;                break;
            case 32:
                openBook();
                break;
            case 65:
                //A
                _yAngle -= 5;
                caseMove();
                break;
            case 87:
                //W
                _xAngle += 5;
                caseMove();
                break;
            case 68:
                //D
                _yAngle += 5;
                caseMove();
                break;
            case 83:
                //S
                _xAngle -= 5;
                caseMove();
                break;
        };

        //$('#page4').css({"webkitTransform":"rotateX("+xRotate+"deg) rotateZ("+zRotate+"deg translateY("+ yTranslate + "px)"});

        $('#book').css({
            "webkitTransform" : "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)"
        });
        $('#book').css({
            "mozTransform" : "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)"
        });
        // $('#model').style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";

    }, false);
    
    $("#up").click(function(){
        turnUp();
    });
    $("#down").click(function(){
        turnDown();
    });
    $("#left").click(function(){
        turnLeft();
    });
    $("#right").click(function(){
        turnRight();
    });
    $("#open").click(function(){
        openBook();
    });

    function turnUp() {
        xAngle += 5;
        $('#book').css({
            "webkitTransform" : "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)"
        });
        $('#book').css({
            "mozTransform" : "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)"
        });
    }

    function turnDown() {
        xAngle -= 5;
        $('#book').css({
            "webkitTransform" : "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)"
        });
        $('#book').css({
            "mozTransform" : "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)"
        });
    }

    function turnLeft() {
        yAngle -= 5;
        $('#book').css({
            "webkitTransform" : "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)"
        });
        $('#book').css({
            "mozTransform" : "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)"
        });
    }

    function turnRight() {
        yAngle += 5;
        $('#book').css({
            "webkitTransform" : "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)"
        });
        $('#book').css({
            "mozTransform" : "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)"
        });
    }
    
    function caseMove() {
        
        $('#case').css({
            "webkitTransform" : "rotateX(" + _xAngle + "deg) rotateY(" + _yAngle + "deg) translateY(299px) translateZ(150px)"
        });
        $('#case').css({
            "mozTransform" : "rotateX(" + _xAngle + "deg) rotateY(" + _yAngle + "deg) translateY(299px) translateZ(150px)"
        });
    }

    function openBook() {
        if (!closed) {//关闭
                    closed = true;
                    $('#cover1').css({
                        "webkitTransform" : "rotateX(90deg) rotateZ(90deg) translateY(200px) translateZ(2px)"
                    });
                    $('#back').css({
                        "webkitTransformOrigin" : "50% 100%"
                    });
                    $('#back').css({
                        "webkitTransform" : "rotateX(-90deg) translateY(200px)"
                    });
                    $('#page1').css({
                        "webkitTransform" : "rotateX(-90deg) translateX(50px) translateY(-50px) translateZ(161px) scale(0.6)"
                    });
                    $('#page2').css({
                        "webkitTransform" : "rotateX(-90deg) translateX(200px) translateZ(161px)"
                    });
                    $('#page3').css({
                        "webkitTransform" : "rotateX(-90deg) translateX(200px) translateY(100px) translateZ(161px) scale(0.9)"
                    });
                    $('#page4').css({
                        "webkitTransform" : "rotateX(-90deg) translateY(100px) translateZ(161px)"
                    });
                    $('#page5').css({
                        "webkitTransform" : "rotateX(-90deg) translateY(-100px) translateZ(161px) scale(0.2)"
                    });
                    $('#case').css({
                       "webkitTransform" : "translateX(120px) translateY(299px) translateZ(150px) scale(0)",
                    });
                } else {//打开
                    closed = false;
                    $('#cover1').css({
                        "webkitTransform" : "rotateY(-90deg) translateZ(200px)"
                    });
                    $('#back').css({
                        "webkitTransform" : "rotateX(0deg) translateZ(-200px)"
                    });
                    $('#page1').css({
                        "webkitTransform" : "rotateY(0deg) translateX(50px) translateY(160px) translateZ(50px)"
                    });
                    $('#page2').css({
                        "webkitTransform" : "rotateY(0deg) translateX(200px) translateY(160px) translateZ(-10px)"
                    });
                    $('#page3').css({
                        "webkitTransform" : "rotateY(0deg) translateX(200px) translateY(160px) translateZ(-100px)"
                    });
                    $('#page4').css({
                        "webkitTransform" : "rotateY(0deg) translateY(160px) translateZ(-150px)"
                    });
                    $('#page5').css({
                        "webkitTransform" : "rotateY(0deg) translateY(160px) translateZ(200px)"
                    });
                    $('#case').css({
                        "webkitTransform" : "translateX(120px) translateY(299px) translateZ(150px) scale(1)",
                    });
                }
    }
});
