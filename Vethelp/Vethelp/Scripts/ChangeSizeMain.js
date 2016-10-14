$(function () {
    window.defaultWidth = window.innerWidth;
    var scale = (window.defaultWidth / window.innerWidth).toFixed(2) * 100;
    var i = 0;
    var percent;

    if (((screen.width - 15) / $(document).width()).toFixed(1) != 1)
    {
        if (i != 0) {
            scale = percent;
        }
        percent = ((screen.width - 15) / $(document).width()).toFixed(1)*100;
        var width = window.innerWidth;
        window.defaultWidth = screen.width + 2;;
        var res = (percent / 100) * width;
        if (scale > percent) {
            $(".fon").css("width", percent + "%");
            $(".fon").css("margin-left", (window.innerWidth - res) / 2);
            $(".fon").css("margin-right", (window.innerWidth - res) / 2);
        } else {
            var res1 = (width * 100) / scale;
            $(".fon").css("width", (window.defaultWidth / window.innerWidth).toFixed(2) * 100 + "%");
            if (((window.defaultWidth / window.innerWidth).toFixed(2) * 100) <= 100) {
                $(".fon").css("margin-left", (100 - ((window.defaultWidth / window.innerWidth).toFixed(2) * 100)) / 2 + "%");
                $(".fon").css("margin-left", (100 - ((window.defaultWidth / window.innerWidth).toFixed(2) * 100)) / 2 + "%");
            }
            else {
                $(".fon").css("margin-left", 0);
            }
        }
    }
    window.onresize = function () {
        if (i != 0) {
            scale = percent;
        }
        percent = (window.defaultWidth / window.innerWidth).toFixed(2) * 100;
        var width = window.innerWidth;
        i++;
        var res = (percent / 100) * width;
        if (scale > percent) {
            $(".fon").css("width", percent+"%");
            $(".fon").css("margin-left", (window.innerWidth - res) / 2);
            $(".fon").css("margin-right", (window.innerWidth - res) / 2);
        } else {
            var res1 = (width * 100) / scale;
            $(".fon").css("width", (window.defaultWidth / window.innerWidth).toFixed(2) * 100 + "%");
            if (((window.defaultWidth / window.innerWidth).toFixed(2) * 100) <= 100) {
                $(".fon").css("margin-left", (100 - ((window.defaultWidth / window.innerWidth).toFixed(2) * 100)) / 2 + "%");
                $(".fon").css("margin-left", (100 - ((window.defaultWidth / window.innerWidth).toFixed(2) * 100)) / 2 + "%");
            }
            else
            {
                $(".fon").css("margin-left", 0);
            }
        }
    };
});