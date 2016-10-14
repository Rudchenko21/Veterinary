
$(function () {
    var k = 1;
    setInterval(function () {
        
        if (k == 4) {
            k = 0;
        }
        $(".firstSection").css('background-image', 'url(../Content/Images/Layout/SiteLogo' + k.toString() + '.jpg)');
        $(".change").fadeOut(2000, function () {
            $(".change").css('background-image', 'url(../Content/Images/Layout/SiteLogo' + (k - 1).toString() + '.jpg)').fadeIn(1020);
        });

        k = k + 1;

    }, 7000);
})