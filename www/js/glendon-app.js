function init_glendon_app() {

    //load header
    $('.app-header').load('header.html');
    $('.app-footer').load('footer.html');

    $('a').removeClass();

    $('#eclassurl').click(function () {
        var ref = window.open('http://eclass.glendon.yorku.ca', '_system', 'location=yes');
    });
    var lang = $('#lang').val();
    lang_toggle(lang);
}

function init_glendon_header() {
    $('.en_btn').click(function () {
        $('#lang').val('en');
        lang_toggle('en');
    });
    $('.fr_btn').click(function () {
        $('#lang').val('fr');
        lang_toggle('fr');
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