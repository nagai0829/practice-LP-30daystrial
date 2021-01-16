$(function() {
    $('.submenu').hide();
    $('.header-nav-item').click(function() {
        $('.submenu').slideToggle();
    });
});


// ページトップイベント
jQuery(function() {
    var appear = false;
    var pagetop = $('#page_top');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 80) { //100pxスクロールしたら
            if (appear == false) {
                appear = true;
                pagetop.stop().animate({
                    'bottom': '70px' //下から50pxの位置に
                }, 300); //0.3秒かけて現れる
            }
        } else {
            if (appear) {
                appear = false;
                pagetop.stop().animate({
                    'bottom': '-50px' //下から-50pxの位置に
                }, 300); //0.3秒かけて隠れる
            }
        }
    });
    pagetop.click(function() {
        $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
        return false;
    });
});


// コース画像モーダル表示イベント
$(function() {
    $(".course-item-img").click(function() {
        // まず、クリックした画像の HTML(<img>タグ全体)を#frayDisplay内にコピー
        $("#grayDisplay").html($(this).prop("outerHTML"));
        //そして、fadeInで表示する。
        $("#grayDisplay").fadeIn(200);
        return false;
    });
    // コース画像モーダル非表示イベント
    // モーダル画像背景 または 拡大画像そのものをクリックで発火
    $("#grayDisplay").click(function() {
        // 非表示にする
        $("#grayDisplay").fadeOut(200);
        return false;
    });
});

// $(function() {
//     $(".course-item-img").click(function() {
//         $("#grayDisplay").html($(this).prop('outerHTML'));
//         $("#grayDisplay").fadeIn(200);
//     });
//     $(".course-item-img").click(function() {
//         $("#grayDisplay").fadeOut(200);
//     });
// });