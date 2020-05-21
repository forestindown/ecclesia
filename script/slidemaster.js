$(document).ready(function () {

    var num = 0;

    var timer = setInterval(function () {

        var before;
        if (num < 4) {
            num = num + 1;
            before = num - 1;
        } else {
            num = 0;
            before = 4;
        }

        $(".slide li").eq(num).css({

            "left": "100%"
        }).show();

        $(".slide li").eq(before).animate({
            "left": "-100%"
        }, 500);

        $(".slide li").eq(num).animate({
            "left": "0px"
        }, 500);

        $(".slideControl li").removeClass("cur");
        $(".slideControl li").eq(num).addClass("cur");

    }, 8000);



	
	
	 $("#slideBox").mouseover(function () {

        clearInterval(timer);

    });

    $("#slideBox").mouseout(function () {

        timer = setInterval(function () {

            var before;
            if (num < 4) {
                num = num + 1;
                before = num - 1;
            } else {
                num = 0;
                before = 4;
            }

            $(".slide li").eq(num).css({

                "left": "100%"
            }).show();

            $(".slide li").eq(before).animate({
                "left": "-100%"
            }, 500);

            $(".slide li").eq(num).animate({
                "left": "0px"
            }, 500);

            $(".slideControl li").removeClass("cur");
            $(".slideControl li").eq(num).addClass("cur");

        }, 8000);

    });



    $(".nextBtn").on("click", function () {



        if (num < 4) {
            num = num + 1;
        } else {
            num = 0;
        }

        $(".slide li").eq(num).css({

            "left": "100%"
        }).show();

        $(".slide li").eq(num - 1).animate({
            "left": "-100%"
        }, 500);

        $(".slide li").eq(num).animate({
            "left": "0px"
        }, 500);

        $(".slideControl li").removeClass("cur");
        $(".slideControl li").eq(num).addClass("cur");

    });


    $(".prevBtn").click(function () {


        if (num > 0) {
            num = num - 1;
        } else {
            num = 4;
        }

        $(".slide li").eq(num).css({

            "left": "-100%"
        }).show();

        if (num == 4) {
            var curNum = 0;
        } else {
            var curNum = num + 1;
        }
        $(".slide li").eq(curNum).animate({
            "left": "100%"
        }, 500);

        $(".slide li").eq(num).animate({
            "left": "0px"
        }, 500);

        $(".slideControl li").removeClass("cur");
        $(".slideControl li").eq(num).addClass("cur");

    });



    $(".slideControl li").click(function () {

        var indexNum = $(".slideControl li").index(this);

        if (num < indexNum) {

            $(".slide li").eq(indexNum).css("left", "100%").show();

            $(".slide li").eq(num).show().animate({
                "left": "-100%"
            }, 500);

            $(".slide li").eq(indexNum).animate({
                "left": "0px"
            }, 500);



            num = indexNum;


        } else if (num > indexNum) {

            $(".slide li").eq(indexNum).css("left", "-100%").show();

            $(".slide li").eq(num).show().animate({
                "left": "100%"
            }, 500);

            $(".slide li").eq(indexNum).animate({
                "left": "0px"
            }, 500);

            num = indexNum;

        } else {
            $(".slide li").eq(indexNum).css("left", "0px").show();


        }

        $(".slideControl li").removeClass("cur");
        $(".slideControl li").eq(indexNum).addClass("cur");

   
	});
	});
