function init_glendon_app() {
    
//    $('a').removeClass();

    $('#eclassurl').click(function () {
        var ref = window.open('http://eclass.glendon.yorku.ca', '_system', 'location=yes');
    });
    
    if ($.cookie('lang')) {
        var lang = $.cookie('lang');
    } else {
        var lang = 'fr';
        $.cookie('lang', 'fr');
        
    }
    $('.btn_' + lang).addClass('btn-success');
    lang_toggle(lang);

    $('.btn_en').click(function () {
//        $('#lang').val('en');
        $.cookie('lang', 'en');
        lang_toggle('en');
    });
    $('.btn_fr').click(function () {
//        $('#lang').val('fr');
        $.cookie('lang', 'fr');
        lang_toggle('fr');
    });
}

function init_glendon_header() {
    $('.btn_en').click(function () {
//        $('#lang').val('en');
        $.cookie('lang', 'en');
        lang_toggle('en');
        $('.btn_en').addClass('btn-success');
        $('.btn_fr').removeClass('btn-success');
    });
    $('.btn_fr').click(function () {
//        $('#lang').val('fr');
        $.cookie('lang', 'fr');
        lang_toggle('fr');
        $('.btn_fr').addClass('btn-success');
        $('.btn_en').removeClass('btn-success');
    });
}

function lang_toggle(language) {
    $.ajax({
        url: 'lang/translations.xml',
        success: function (xml) {
            $(xml).find('translation').each(function () {
                var id = $(this).attr('id');
                var text = $(this).find(language).text();
                $("." + id).html(text);
            });
        }
    });
}