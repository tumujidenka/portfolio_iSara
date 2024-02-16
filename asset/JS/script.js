//FAQでAを表示する
$(document).ready(function() {
    $('.FAQ_list_headline').on('click', function() {
        $(this).next('.FAQ_list_description').slideToggle(200);
    });
});

//受講の流れで詳細を表示する
$(document).ready(function() {
    $('.flow_description_icon').on('click', function() {
        $(this).next('.flow_discription_text').slideToggle(200);
    });
});

//少しでもスクロールしたら、Topに戻るボタンを表示する。
$(document).ready(function() {
    // スクロールボタンの表示非表示
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 10) { // 10px以上スクロールされた場合にボタンを表示
            $('#toTop_button').fadeIn();
        } else {
            $('#toTop_button').fadeOut();
        }
    });

    // ボタンクリック時のスクロールアクション
    $('#toTop_button').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);  // この800はスクロールの速度（ミリ秒）。この値を調節することでスピードを変更できる
    });
});