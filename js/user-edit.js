$(function() {
    // 問題1
    $("#get_name").click(function(){ // ボタンに対してクリックイベントを付与
        $("#subject01_result").html($("#yamada_name").html());
    });

    // 問題2
    $("#add_sakurako").click(function(){
        // すでに要素が追加されていたら、要素の追加をしないための制御
        if ($("#member_list>#sakurako").size() == 0) {
            $("#member_list").append('<li id="sakurako">櫻子</li>');
        }
    });
    $("#add_himawari").click(function(){
        // すでに要素が追加されていたら、要素の追加をしないための制御
        if ($("#member_list>#himawari").size() == 0) {
            $("#member_list").append('<li id="himawari">向日葵</li>');
        }
    });

    // 問題3
    $('#remove_akari').click(function(){
        $("#member_list_remove>li").remove('#akari');
    });

    // 問題4
    $('#change_visible_momo').click(function(){
        if ($('#stealth_momo').is(':hidden')) {
            $('#stealth_momo').show();
        } else {
            $('#stealth_momo').hide();
        }
    });

    // 問題5
    $('#change_header_html').click(function(){
        $('h2').each(function(){
            h2_element_text = $(this).html();
            // 二重に囲みを付与しないようにする
            h2_element_text = h2_element_text.replace(/【(.+)】/,"$1");
            $(this).html('【' + h2_element_text + '】');
        });
    });

});
